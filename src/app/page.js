// 主页入口文件
import Image from "next/image";
import Footer from "./components/footer";
import ImgList from "./components/image";
import ImgList2 from "./components/image-2";
import ImgList6 from "./components/image-6";
import Lottery from "./components/lottery";
import Nav from "./components/nav";
import Roll from "./components/roll";
import Table2 from "./components/table-2";
import Table3 from "./components/table-3";
import Table4 from "./components/table-4";

async function getData() {
  const res = await fetch("http://localhost:3001/animal/list");
  const users = await res.json();
  console.log(users, "page-fetch");
  return users;
}

export default async function Home({ users }) {
  return (
    <main className="flex min-h-screen flex-col items-center content pb-12">
      <Image
        src="/images/222.jpg"
        alt="Vercel Logo"
        className="dark:invert"
        width={768}
        height={48}
        priority
      />
      <div className="z-10 flex items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="/images/8787.gif"
          alt="Vercel Logo"
          className="dark:invert"
          width={768}
          height={24}
          priority
        />
      </div>
      <Nav />
      <Lottery />
      {/* 图片区 */}
      <ImgList />
      <Roll />
      {/* 列表1 */}
      <Table2 />
      {/* 列表1 */}
      <Table2 />
      {/* 列表3 */}
      <Table3 />
      {/* 图2 */}
      <ImgList2 />
      {/* 列表4 */}
      <Table4 />
      <ImgList6 />
      <Footer />
    </main>
  );
}
