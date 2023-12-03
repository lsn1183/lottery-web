// 主页入口文件
import '../styles/base.css';
import TopImageComponents from "./components/fixed-image-components";
import ImgList1 from "./components/image-1";
import NavBar from "./components/nav-bar";
// import ImgList2 from "./components/image-2";
// import ImgList6 from "./components/image-6";
import moment from 'moment';
import { getLatestOpenData, getLatestRecommendData } from './api';
import Lottery from "./components/lottery";
import Roll from "./components/roll";
import Table1 from './components/table-1';
// import Table2 from "./components/table-2";
// import Table3 from "./components/table-3";
// import Table4 from "./components/table-4";
// import Footer from "./components/footer";

async function getData() {
  const result = await getLatestOpenData()
  const result2 = await getLatestRecommendData()

  return { latestOpenData: result.list, latestRecommendData: result2.list }
}
export default async function Home({ }) {
  let periodCount = moment().dayOfYear()
  const todayDate = moment().format('YYYY-MM-DD HH:mm') // 现在时间
  const today = moment().format('YYYY-MM-DD') // 今天日期
  const targetDate = moment(today + ' 22:30') // 目标时间
  const diff = moment(todayDate).diff(targetDate, 'MM') // 现在时间和目标时间比较
  if (diff > 0) { // 超过22:30分，已过当天开奖时间，+1
    periodCount += 1
  } else {
    periodCount -= 1

  }
  console.log('2023年目前为止天数：', periodCount)

  const { latestOpenData, latestRecommendData} = await getData();

  return (
    <main className="content pb-5 min-h-screen overflow-scroll">
      {/* 顶部图片 */}
      <TopImageComponents periodCount={periodCount} />
      {/* 导航按钮 */}
      <NavBar />
      <Lottery data={latestOpenData} periodCount={periodCount} />
      {/* 图片区 */}
      <ImgList1 />
      {/* 广告区域 */}
      <Roll />
      {/* 列表1 ， 内容展示最新一期未开奖资料*/}
      <Table1 data={latestRecommendData} periodCount={periodCount} />
      {/* 列表2 */}
      {/* <Table2 /> */}
      {/* 列表3 */}
      {/* <Table3 /> */}
      {/* 图2 */}
      {/* <ImgList2 /> */}
      {/* 列表4 */}
      {/* <Table4 />
      <ImgList6 />
      <Footer /> */}
    </main>
  );
}
