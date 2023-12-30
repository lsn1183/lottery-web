import { getAnimalList, getLatestColourData, getLatestFauvistData, getLatestFourZodiacData, getLatestOpenHistoryData, getLatestRecommendData, getLatestZodiacData } from '@/api/query';
import TopImage from '@/components/fixed-image';
import Footer from '@/components/footer';
import ImgList1 from '@/components/image-1';
import ImgList2 from '@/components/image-2';
import ImgList6 from '@/components/image-6';
import Lottery from '@/components/lottery';
import NavBar from '@/components/nav-bar';
import Roll from '@/components/roll';
import Table1 from '@/components/table-1';
import Table10 from '@/components/table-10';
import Table2 from '@/components/table-2';
import Table3 from '@/components/table-3';
import Table4 from '@/components/table-4';
import Table5 from '@/components/table-5';
import Table6 from '@/components/table-6';
import Table7 from '@/components/table-7';
import Table8 from '@/components/table-8';
import Table9 from '@/components/table-9';
import moment from 'moment';

const Title = '欧洲彩';
const openTime = '20:50'
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const todayDate = moment().format('YYYY-MM-DD HH:mm'); // 现在时间
  const today = moment().format('YYYY-MM-DD'); // 今天日期
  const targetDate = moment(today + ' ' + openTime); // 目标时间
  const diffTime = moment(todayDate).diff(targetDate, 'MM'); // 现在时间和目标时间比较
  let periodCount = moment().dayOfYear(); // 今年的第几天
  const year = moment().year(); // 今年年份
  console.log(year + '年第：' + periodCount + '天');
  console.log('开奖时间倒计时：', diffTime);
  const result = await getAnimalList({ year });
  const result1 = await getLatestOpenHistoryData({ year });
  const result2 = await getLatestRecommendData({ year });
  const result3 = await getLatestZodiacData({ year });
  const result4 = await getLatestColourData({ year });
  const result5 = await getLatestFourZodiacData({ year });
  const result6 = await getLatestFauvistData({ year });

  // if (diffTime < 0) {  // 今日未开奖
  // } else { // 已过当天开奖日期+1
  //   periodCount += 1;
  // }

  const data = {
    openHistoryData: result1.list || [],
    animalData: result?.data || [],
    recommendData: result2.list || [],
    zodiacData: result3?.list || [],
    colourData: result4?.list || [],
    fourZodiacData: result5.list || [],
    fauvistData: result6.list || [],
    periodCount,
    diffTime
  };

  return { props: { data } }
}
export default function Page({ data }) {
  return (
    <main className="content overflow-scroll">
      {/* 顶部图片 */}
      <TopImage />
      {/* 导航按钮 */}
      <NavBar title={Title} />
      <ImgList1 title={Title} />
      <Lottery title={Title} data={data} openTime={openTime} />
      <Roll title={Title} />
      <Table1 title={Title} data={data} />
      <Table2 title={Title} data={data} />
      <Table3 title={Title} data={data} />
      <ImgList2 title={Title} />
      <Table4 title={Title} data={data} />
      <ImgList6 title={Title} />
      <Table5 title={Title} data={data} />
      <Table6 title={Title} data={data} />
      <Table7 title={Title} data={data} />
      <Table8 title={Title} data={data} />
      <Table9 title={Title} data={data} />
      <Table10 title={Title} data={data} />
      <Footer title={Title} data={data} />
    </main>
  )
}