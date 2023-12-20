import { getAnimalList, getLatestColourData, getLatestFourZodiacData, getLatestOpenData, getLatestRecommendData, getLatestZodiacData } from '@/api/query';
import TopImage from '@/components/fixed-image';
import Footer from '@/components/footer';
import ImgList1 from '@/components/image-1';
// import ImgList2 from '@/components/image-2';
// import ImgList6 from '@/components/image-6';
import Lottery from '@/components/lottery';
import NavBar from '@/components/nav-bar';
import Roll from '@/components/roll';
import Table1 from '@/components/table-1';
import Table2 from '@/components/table-2';
import Table3 from '@/components/table-3';
import Table4 from '@/components/table-4';
import Table5 from '@/components/table-5';
import Table6 from '@/components/table-6';
import Table7 from '@/components/table-7';
import Table8 from '@/components/table-8';

import { insertAnimalDatabase, insertColourDatabase, insertFauvistDatabase, insertFourzodiacDatabase, insertOpenDataSource, insertRemmDatabase, insertZodiacDatabase } from '@/database/insert';
import moment from 'moment';

async function insertDataFunctions(statrLeng, endLeng) {

  await insertAnimalDatabase(statrLeng, endLeng);
  await insertFourzodiacDatabase(statrLeng, endLeng)
  await insertZodiacDatabase(statrLeng, endLeng);
  await insertOpenDataSource(statrLeng, endLeng); // 往open数据库插入历史开奖数据
  await insertColourDatabase(statrLeng, endLeng);
  await insertRemmDatabase(statrLeng, endLeng);
  await insertFauvistDatabase(statrLeng, endLeng);

  console.log('插入数据长度：', statrLeng, endLeng);

};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const todayDate = moment().format('YYYY-MM-DD HH:mm'); // 现在时间
  const today = moment().format('YYYY-MM-DD'); // 今天日期
  const targetDate = moment(today + ' 21:30'); // 目标时间
  const diffTime = moment(todayDate).diff(targetDate, 'MM'); // 现在时间和目标时间比较
  let periodCount = moment().dayOfYear(); // 今年的第几天
  console.log('2023年第：' + periodCount + '天');
  console.log('相差数额：', diffTime);
  if (diffTime < 0) {
    // 超过21:30分，已过当天开奖时间，+1 , 再从中决定自动加不加数据
    periodCount += 1;
  }

  const result = await getAnimalList();
  const result1 = await getLatestOpenData();
  const result2 = await getLatestRecommendData();
  const result3 = await getLatestZodiacData();
  const result4 = await getLatestColourData();
  const result5 = await getLatestFourZodiacData()
  const data = {
    openData: result1.list || [],
    animalData: result?.data || [],
    recommendData: result2.list || [],
    zodiacData: result3?.list || [],
    colourData: result4?.list || [],
    fourZodiacData: result5.list || [],
    periodCount
  };

  // await insertAnimalDatabase()
  insertDataFunctions(0, periodCount)
  let statrLeng = 0, endLeng = periodCount;
  // await insertAnimalDatabase(statrLeng, endLeng);
  // await insertFourzodiacDatabase(statrLeng, endLeng)
  // await insertZodiacDatabase(statrLeng, endLeng);
  // await insertOpenDataSource(statrLeng, endLeng); // 往open数据库插入历史开奖数据
  // await insertColourDatabase(statrLeng, endLeng);
  // await insertRemmDatabase(statrLeng, endLeng);


  return { props: { data } }
}

export default function Page({ data }) {
  const { periodCount } = data;
  const Title = '欧洲彩';

  console.log('2023年目前为止最新期数：', periodCount);

  // Render data...
  return (
    <main className="content overflow-scroll">
      {/* 顶部图片 */}
      <TopImage />
      {/* 导航按钮 */}
      <NavBar title={Title} />
      <ImgList1 title={Title} />
      <Lottery title={Title} data={data} />
      <Roll title={Title} />
      <Table1 title={Title} data={data} />
      <Table2 title={Title} data={data} />
      <Table3 title={Title} data={data} />
      {/* <ImgList2 title={Title} /> */}
      <Table4 title={Title} data={data} />
      {/* <ImgList6 title={Title} /> */}
      <Table5 title={Title} data={data} />
      <Table6 title={Title} data={data} />
      <Table7 title={Title} data={data} />
      <Table8 title={Title} data={data} />
      <Footer title={Title} data={data} />
    </main>
  )
}