// 主页入口文件
import {
  insertColourDatabase,
  insertOpenDataSource,
  insertRemmDatabase,
  insertZodiacDatabase,
} from '@/app/database/insert';
import moment from 'moment';
import {
  getAnimalList,
  getLatestColourData,
  getLatestOpenData,
  getLatestRecommendData,
  getLatestZodiacData,
} from './api/query';
import TopImageComponents from './components/fixed-image';
import Footer from './components/footer';
import ImgList1 from './components/image-1';
import ImgList2 from './components/image-2';
import ImgList6 from './components/image-6';
import Lottery from './components/lottery';
import NavBar from './components/nav-bar';
import Roll from './components/roll';
import Table1 from './components/table-1';
import Table2 from './components/table-2';
import Table3 from './components/table-3';
import Table4 from './components/table-4';

const Title = '欧洲彩';

const insertDataFunctions = async (length) => {
  console.log('插入数据长度：', length);
  // return;
  await insertOpenDataSource(length); // 往open数据库插入历史开奖数据
  await insertZodiacDatabase(length);
  await insertColourDatabase(length);
  await insertRemmDatabase(length);
};

async function getLoadData() {
  const animalData = await getAnimalList();
  const result1 = await getLatestOpenData();
  const result2 = await getLatestRecommendData();
  const result3 = await getLatestZodiacData();
  const result4 = await getLatestColourData();

  return {
    latestOpenData: result1.list,
    latestRecommendData: result2.list,
    latestZodiacData: result3?.list,
    animalData: animalData?.data,
    latestColourData: result4?.list,
  };
}

export default async function Home({}) {
  let periodCount = moment().dayOfYear();
  const todayDate = moment().format('YYYY-MM-DD HH:mm'); // 现在时间
  const today = moment().format('YYYY-MM-DD'); // 今天日期
  const targetDate = moment(today + ' 21:30'); // 目标时间
  const diff = moment(todayDate).diff(targetDate, 'MM'); // 现在时间和目标时间比较
  console.log('2023年目前为止天数：', periodCount);
  const {
    latestOpenData,
    latestRecommendData,
    latestZodiacData,
    animalData,
    latestColourData,
  } = await getLoadData();
  const latestOpenItem = latestOpenData[0]; // 最新开奖记录
  console.log('数据库最新期：', latestOpenItem.periods);
  if (!latestOpenItem?.periods) {
    insertDataFunctions(periodCount);
  } else if (periodCount > latestOpenItem?.periods) {
    insertDataFunctions(periodCount - latestOpenItem?.periods);
  }
  if (diff > 0) {
    // 超过21:30分，已过当天开奖时间，+1 , 再从中决定自动加不加数据
    periodCount += 1;
  } else {
    periodCount -= 1;
  }
  console.log('2023年目前为止最新期数：', periodCount);

  return (
    <main className="content overflow-scroll">
      {/* 顶部图片 */}
      <TopImageComponents periodCount={periodCount} title={Title} />
      {/* 导航按钮 */}
      <NavBar title={Title} />
      <Lottery title={Title} data={latestOpenData} periodCount={periodCount} />
      {/* 图片区 */}
      <ImgList1 title={Title} />
      {/* 广告区域 */}
      <Roll title={Title} />
      {/* 列表1 ， 内容展示最新一期未开奖资料*/}
      <Table1
        title={Title}
        data={latestRecommendData}
        periodCount={periodCount}
        openData={latestOpenData}
      />
      {/* 列表2 */}
      <Table2
        title={Title}
        data={latestZodiacData}
        periodCount={periodCount}
        animalData={animalData}
      />
      {/* 列表3 */}
      <Table3 title={Title} data={latestColourData} openData={latestOpenData} />
      {/* 图2 */}
      <ImgList2 title={Title} />
      {/* 列表4 */}
      <Table4 title={Title} />
      <ImgList6 title={Title} />
      <Footer title={Title} periodCount={periodCount} data={animalData} />
    </main>
  );
}
