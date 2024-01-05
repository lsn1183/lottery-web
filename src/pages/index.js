import { Title, openTime } from '@/api/config';
import { getAnimalList, getLatestColourData, getLatestFauvistData, getLatestMultiZodiacData, getLatestOpenHistoryData, getLatestRecommendData, getLatestZodiacData } from '@/api/query';
import TopImage from '@/components/fixed-image';
import Footer from '@/components/footer';
import Lottery from '@/components/lottery';
import NavBar from '@/components/nav-bar';
import Roll from '@/components/roll';
import Table1 from '@/components/table-1';
import moment from 'moment';
// import dynamic from 'next/dynamic';
import ImgList1 from '@/components/image-1';
import ImgList2 from '@/components/image-2';
import ImgList3 from '@/components/image-3';
import NavImage from '@/components/nav-image';

import Table10 from '@/components/table-10';
import Table11 from '@/components/table-11';
import Table12 from '@/components/table-12';
import Table2 from '@/components/table-2';
import Table3 from '@/components/table-3';
import Table4 from '@/components/table-4';
import Table5 from '@/components/table-5';
import Table6 from '@/components/table-6';
import Table7 from '@/components/table-7';
import Table8 from '@/components/table-8';
import Table9 from '@/components/table-9';
// const ImgList1 = dynamic(() => import('@/components/image-1'))
// const ImgList2 = dynamic(() => import('@/components/image-2'))
// const ImgList6 = dynamic(() => import('@/components/image-6'))
// const TopImage = dynamic(() => import('@/components/fixed-image'))

// const ImgList6 = dynamic(() => import('@/components/image-6'))
// const Table2 = dynamic(() => import('@/components/table-2'))
// const Table3 = dynamic(() => import('@/components/table-3'))
// const Table4 = dynamic(() => import('@/components/table-4'))
// const Table5 = dynamic(() => import('@/components/table-5'))
// const Table6 = dynamic(() => import('@/components/table-6'))
// const Table7 = dynamic(() => import('@/components/table-7'))
// const Table8 = dynamic(() => import('@/components/table-8'))
// const Table9 = dynamic(() => import('@/components/table-9'))
// const Table10 = dynamic(() => import('@/components/table-10'))
// const Table11 = dynamic(() => import('@/components/table-11'))
// const Table12 = dynamic(() => import('@/components/table-12'))

// This gets called on every request
export async function getServerSideProps({ req }) {
  // console.log('req', req.headers);
  // Fetch data from external API
  // const nowDate = moment().format('YYYY-MM-DD HH:mm'); // 现在时间
  // const today = moment().format('YYYY-MM-DD'); // 今天日期
  // const openDate = moment(today + ' ' + openTime); // 目标时间
  // const diffTime = moment(openDate).diff(nowDate, 'seconds'); // 现在时间和开奖时间比较， 小于0则过时
  let periodCount = moment().dayOfYear(); // 今年的第几天
  const year = moment().year(); // 今年年份
  console.log(year + '年第：' + periodCount + '天');
  const result = await getAnimalList({ year });
  const result1 = await getLatestOpenHistoryData({ year });
  const result2 = await getLatestRecommendData({ year });
  const result3 = await getLatestZodiacData({ year });
  const result4 = await getLatestColourData({ year });
  const result5 = await getLatestMultiZodiacData({ year });
  const result6 = await getLatestFauvistData({ year });

  const data = {
    openHistoryData: result1.list || [],
    animalData: result?.data || [],
    recommendData: result2.list || [],
    zodiacData: result3?.list || [],
    colourData: result4?.list || [],
    multiZodiacData: result5.list || [],
    fauvistData: result6.list || [],
    periodCount,
  };

  return { props: { data } }
}

export default function Page({ data }) {
  const { periodCount } = data
  return (
    <main className="content overflow-y-auto">
      {/* 顶部图片 */}
      <TopImage />
      {/* 导航按钮 */}
      <NavBar title={Title} />
      <NavImage title={Title} />
      <Lottery title={Title} data={data} openTime={openTime} />
      <Roll title={Title} />
      <Table1 title={Title} data={data} />
      <ImgList1 title={Title} periodCount={periodCount} />
      <Table2 title={Title} data={data} />
      <Table3 title={Title} data={data} />
      <ImgList2 title={Title} periodCount={periodCount} />
      <Table4 title={Title} data={data} />
      <ImgList3 title={Title} periodCount={periodCount} />
      <Table5 title={Title} data={data} />
      <Table6 title={Title} data={data} />
      <Table7 title={Title} data={data} />
      <Table8 title={Title} data={data} />
      <Table9 title={Title} data={data} />
      <Table10 title={Title} data={data} />
      <Table11 title={Title} data={data} />
      <Table12 title={Title} data={data} />
      <Footer title={Title} data={data} />

    </main>
  )
}