import { group } from '@/utils/utils';
import Image from 'next/image';
// import { CountDown } from "react-vant";

// 波色类型列表
const colorList = [
  { color: 'red', url: '/icon/ball-red.png' },
  { color: 'blue', url: '/icon/ball-blue.png' },
  { color: 'green', url: '/icon/ball-green.png' },
];

export default function Lottery({ data, title }) {
  const { openData, periodCount } = data;
  const todayDate = new Date().toLocaleDateString(); // 今天日期
  const todayTime = new Date(todayDate).getTime(); // 今天日期转为时间戳
  const openTime = 22.5 * 60 * 60 * 1000; //  开奖时间小时
  const countTime = todayTime + openTime - Date.now(); //
  const item = openData ? openData[0] : null;

  const { id, periods, ...other } = item;
  const list = group(Object.entries(other), 3).map((item) => {
    let newItem = {};
    item?.forEach((element, index) => {
      const splitArr = element[0].split('_');
      let key =
        splitArr.length > 1
          ? splitArr[1]
          : splitArr[0].indexOf('ordinary') != -1
            ? 'ordinary'
            : splitArr[0];
      newItem[key] = element[1];
    });
    return newItem;
  });
  // console.log('Lottery-props', list);
  return (
    <div className="flex w-full flex-col gap-5 p-5">
      <div className="flex justify-between text-sm">
        <div>
          {title}第{Number(periodCount)}期开奖结果：
        </div>
        <div className="flex items-center font-bold">
          <span className="mr-2 ">开奖倒计时:</span>
          {/* <CountDown time={countTime} format="HH 时 mm 分 ss 秒" className=" " /> */}
        </div>
      </div>
      <ul className="flex flex-wrap justify-between gap-2">
        {list.reverse().map((item, index) => (
          <li key={item.ordinary + item.property}
            className={index < 6
              ? `text-${item.color}-600 flex w-1/6 flex-1 flex-col items-center pt-2`
              : `text-${item.color}-600 ml-1 flex w-1/6 flex-1 flex-col items-center pt-2 font-bold`
            }
          >
            <div className="relative">
              <Image
                src={colorList.filter((color) => color.color == item.color)[0].url}
                alt="Vercel Logo"
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 33vw"
                width={100}
                height={100}
                style={{ objectFit: 'contain', width: 'auto', height: 'auto' }}
              ></Image>
              <div
                className="absolute text-sm font-medium"
                style={{
                  left: '48%',
                  top: '30%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <span className={index >= 6 ? 'text-base font-bold' : ''}>
                  {' '}
                  {item.particular || item.ordinary}{' '}
                </span>
              </div>
              <div className="p-1 text-center text-sm ">
                <span className={`text-${item.color}-600 `}>
                  {item.property?.substring(0, 1)}
                </span>
                <span className="text-black">{item.property.substring(1)}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
