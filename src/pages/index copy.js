import { getAnimalList, getLatestColourData, getLatestOpenData, getLatestRecommendData, getLatestZodiacData } from '@/api/query';
import TopImageComponents from '@/components/fixed-image';
import Footer from '@/components/footer';
import ImgList1 from '@/components/image-1';
import ImgList2 from '@/components/image-2';
import ImgList6 from '@/components/image-6';
import Lottery from '@/components/lottery';
import NavBar from '@/components/nav-bar';
import Roll from '@/components/roll';
import Table1 from '@/components/table-1';
import Table2 from '@/components/table-2';
import Table3 from '@/components/table-3';
import Table4 from '@/components/table-4';
import { insertColourDatabase, insertOpenDataSource, insertRemmDatabase, insertZodiacDatabase } from '@/database/insert';
import moment from 'moment';

const insertDataFunctions = async (statrLeng, endLeng) => {
  console.log('插入数据长度：', statrLeng, endLeng);
  // return;
  await insertOpenDataSource(statrLeng, endLeng); // 往open数据库插入历史开奖数据
  await insertZodiacDatabase(statrLeng, endLeng);
  await insertColourDatabase(statrLeng, endLeng);
  await insertRemmDatabase(statrLeng, endLeng);
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const todayDate = moment().format('YYYY-MM-DD HH:mm'); // 现在时间
  const today = moment().format('YYYY-MM-DD'); // 今天日期
  const targetDate = moment(today + ' 21:30'); // 目标时间
  const diffTime = moment(todayDate).diff(targetDate, 'MM'); // 现在时间和目标时间比较
  // const res = await fetch('http://localhost:3001' + '/animal/list')
  // const data = await res.json()
  const result = await getAnimalList();
  const result1 = await getLatestOpenData();
  const result2 = await getLatestRecommendData();
  const result3 = await getLatestZodiacData();
  const result4 = await getLatestColourData();

  console.log('result', result);
  console.log('result1', result1);

  const data = {
    openData: result1.list,
    animalData: result?.data,
    recommendData: result2.list,
    zodiacData: result3?.list,
    colourData: result4?.list,
    diffTime
  };

  return { props: { data } }
}

export default function Page({ data }) {
  const { diffTime, animalData, openData, recommendData, zodiacData, colourData } = data;
  const Title = '欧洲彩';
  let periodCount = moment().dayOfYear(); // 今年的第几天
  console.log('2023年第：' + periodCount + '天');
  console.log('相差数额：', diffTime);
  if (diffTime < 0) {
    // 超过21:30分，已过当天开奖时间，+1 , 再从中决定自动加不加数据
    periodCount += 1;
  }
  console.log('2023年目前为止最新期数：', periodCount);
  // Render data...
  return (
    <main className="content overflow-scroll">
      {/* 顶部图片 */}
      <TopImageComponents />
      {/* 导航按钮 */}
      <NavBar title={Title} />
      <Lottery title={Title} data={data} />
      {/* 图片区 */}
      <ImgList1 title={Title} />
      {/* 广告区域 */}
      <Roll title={Title} />
      {/* 列表1 ， 内容展示最新一期未开奖资料*/}
      <Table1 title={Title} data={data} />
      {/* 列表2 */}
      <Table2 title={Title} data={data} />
      {/* 列表3 */}
      <Table3 title={Title} data={data} />
      {/* 图2 */}
      <ImgList2 title={Title} />
      {/* 列表4 */}
      <Table4 title={Title} data={data} />
      <ImgList6 title={Title} />
      <Footer title={Title} data={data} />
    </main>
  )
}