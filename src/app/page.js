// 主页入口文件
import '../style/base.css';
import TopImageComponents from "./components/fixed-image-components";
import ImgList1 from "./components/image-1";
import NavBar from "./components/nav-bar";
// import ImgList2 from "./components/image-2";
// import ImgList6 from "./components/image-6";
import { getLatestOpenData } from './api';
import Lottery from "./components/lottery";
import Roll from "./components/roll";
import Table1 from './components/table-1';
// import Table2 from "./components/table-2";
// import Table3 from "./components/table-3";
// import Table4 from "./components/table-4";
// import Footer from "./components/footer";

async function getData() {
  const data = await getLatestOpenData()
  return data.list
}

export default async function Home({ }) {
  const latestOpenData = await getData();
  return (
    <main className="content pb-5 min-h-screen overflow-scroll">
      {/* 顶部图片 */}
      <TopImageComponents />
      {/* 导航按钮 */}
      <NavBar />
      <Lottery data={latestOpenData} />
      {/* 图片区 */}
      <ImgList1 />
      {/* 广告区域 */}
      <Roll />
      {/* 列表1 ， 内容展示最新一期未开奖资料*/}
      <Table1 data={latestOpenData} />
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
