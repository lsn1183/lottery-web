import Image from "next/image";

export default function Nav() {
  const navList = [
    { name: "挑码助手", url: "/icon/nav_tmzs.png" },
    { name: "开奖日期", url: "/icon/date.png" },
    { name: "号码属性", url: "/icon/nav_hmsx.png" },
    { name: "开奖记录", url: "/icon/nav_pc.png" },
  ];

  return (
    <div className=" w-full">
      <div className=" w-full flex justify-start h-10 ml-10 p-2">
        <button className=" text-left">开奖记录:</button>
        <span>{'???'}</span>
      </div>
      <div className="flex justify-around w-full p-6">
        {navList.map((item) => (
          <div className="flex flex-col items-center">
            <Image
              src={item.url}
              alt="Vercel Logo"
              className="dark:invert"
              width={46}
              height={46}
              priority
            />
            <div className="p-2">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
