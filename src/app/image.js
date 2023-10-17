import Image from "next/image";

// 插图集合
export default function ImgList() {
  const list = [
    { desc: "新加坡新彩", url: "/images/001.gif" },
    { desc: "新加坡新彩", url: "/images/002.gif" },
    { desc: "新加坡新彩", url: "/images/003.gif" },
    { desc: "新加坡新彩", url: "/images/004.gif" },
    { desc: "新加坡新彩", url: "/images/005.gif" },
    { desc: "新加坡新彩", url: "/images/002.gif" },
    // { desc: "新加坡新彩", url: "/images/001.gif" },
  ];

  return (
    <div className="flex w-full mt-6 p-3 flex-wrap justify-between gap-2 bg-orange-200">
      {list.map((item) => (
        <div
          className="flex flex-col items-center border"
          style={{ width: "32%", height: "135px",}}
        >
          <div className="" style={{height: '100px'}}>
            <Image
              src={item.url}
              alt="Vercel Logo"
              className="dark:invert"
              width={224}
              height={100}
              priority
              style={{height: '100%', width:'100%'}}
            />
          </div>
          <div className="p-2 flex-1 text-center">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
