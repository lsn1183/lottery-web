import { group } from "@/utils/utils";
import Image from "next/image";
// import { CountDown } from "react-vant";

// 波色类型列表
const colorList = [
  { color: "red", url: "/icon/ball-red.png" },
  { color: "blue", url: "/icon/ball-blue.png" },
  { color: "green", url: "/icon/ball-green.png" },
]

export default async function Lottery({ data = [], periodCount }) {
  // console.log('Lottery-props', data);
  const todayDate = new Date().toLocaleDateString(); // 今天日期
  const todayTime = new Date(todayDate).getTime(); // 今天日期转为时间戳
  const openTime = 22.5 * 60 * 60 * 1000; //  开奖时间小时
  const countTime = todayTime + openTime - Date.now(); //
  const { id, periods, ...other } = data[0];
  const list = group(Object.entries(other), 3)
    .map(item => {
      let newItem = {}
      item?.forEach((element, index) => {
        const splitArr = element[0].split('_')
        let key = splitArr.length > 1 ? splitArr[1] : splitArr[0].indexOf('ordinary') != -1 ? 'ordinary' : splitArr[0]
        newItem[key] = element[1];
      });
      return newItem;
    })

  return (
    <div className="lottery w-full flex flex-col gap-5 p-5">
      <div className="flex justify-between text-sm">
        <div>新彩第{Number(periodCount)}期开奖结果：
        </div>
        <div className="flex items-center font-bold">
          <span className="mr-2 ">开奖倒计时:</span>
          {/* <CountDown time={countTime} format="HH 时 mm 分 ss 秒" className=" " /> */}
        </div>
      </div>
      <div className="flex justify-between gap-3 flex-wrap">
        {list.reverse().map((item, index) => (
          <div
            key={item.id || index}
            className={
              index < 6
                ? "flex items-center flex-col item"
                : "flex items-center flex-col item"
            }
            style={
              index < 6
                ? {
                  boxShadow: "0 0 8px rgba(0,0,0,0.3)",
                }
                : {
                  boxShadow: "0 0 20px rgb(240 46 238)",
                  borderColor: "rgb(41 232 163)",
                }
            }
          >
            <div className="relative w-12">
              <Image
                src={colorList.filter(color => color.color == item.color)[0].url}
                alt="Vercel Logo"
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 33vw"
                width={100}
                height={100}
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
              />
              <div className="absolute text-lg font-medium top-0 left-0 bottom-0 right-0 m-auto"
                style={{
                  left: '50%',
                  top: '45%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {item.particular || item.ordinary}
              </div>
            </div>
            <div className="p-2 text-base">
              {item.property}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
