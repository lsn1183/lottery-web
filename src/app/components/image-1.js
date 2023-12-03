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
  ];

  return (
    <div className="bg-orange-200 mt-6 p-2 flex justify-start flex-wrap">
      {list.map((item,index) => (
        <div className="border flex-1 c_item" >
          <div className="relative" style={{height: '70%'}}>
            <Image
              src={item.url}
              alt="Vercel Logo"
              sizes="(max-width: 768px) 100vw, 33vw"
              width={100}
              height={100}
              style={{ objectFit: "", width: "100%", height: "100%" }}
            />
          </div>
          <div className="p-2 flex-1 text-center text-sm">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
