import Image from "next/image";

export default function Lottery() {
  const list = [
    { name: "蛇", type: "金", color: "red", url: "/icon/red.png" },
    { name: "蛇", type: "金", color: "red", url: "/icon/blue.png" },
    { name: "蛇", type: "金", color: "red", url: "/icon/green.png" },
    { name: "蛇", type: "金", color: "red", url: "/icon/red.png" },
    { name: "蛇", type: "金", color: "red", url: "/icon/red.png" },
    { name: "蛇", type: "金", color: "red", url: "/icon/red.png" },
    { name: "蛇", type: "金", color: "red", url: "/icon/red.png" },
  ];

  return (
    <div className="w-full pt-2 pr-10 pl-10">
      <div className="flex justify-between">
        <div>港澳新彩第282期开奖结果</div>
        <div>倒计时</div>
      </div>
      <div className="flex justify-around pt-10">
        {list.map((item, index) => (
          <div
            className={index<6?'flex items-center flex-col':'flex items-center flex-col ml-2'}
            style={index<6?{
              width: "87px",
              height: "100px",
              borderRadius: "8px",
              paddingTop: "10px",
              boxShadow: "0 0 8px rgba(0,0,0,0.2)",
            }:{
              width: "87px",
              height: "100px",
              borderRadius: "8px",
              paddingTop: "10px",
              boxShadow: "0 0 10px rgba(0,160,233)",
              borderColor: '#00a0e9'
            }}
          >
            <Image
              src={item.url}
              alt="Vercel Logo"
              className="dark:invert"
              width={46}
              height={46}
              priority
            />
            <div className="p-2">{item.name}/{item.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
