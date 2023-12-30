'use client'
import { CLIENT_API } from '@/api/config';
import { group } from '@/utils/utils';
import moment from 'moment';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TimerContainer } from './CountDown/timer';

// 波色类型列表
const colorList = [
  { color: 'red', url: '/icon/ball-red.png' },
  { color: 'blue', url: '/icon/ball-blue.png' },
  { color: 'green', url: '/icon/ball-green.png' },
];

const checkData = (item) => {
  const { id, periods, year, ...other } = item;
  const data = group(Object.entries(other), 3).map((item) => {
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
  })
  const sourceIndex = data.findIndex(item => item.particular)
  const item1 = data[sourceIndex]
  const item2 = data[data.length - 1]
  data[sourceIndex] = item2
  data[data.length - 1] = item1
  console.log('开奖data', data);
  return data
}

export default function Lottery({ data, title, openTime }) {
  const { openHistoryData, periodCount, diffTime } = data;
  const historyItem = openHistoryData[0];
  if (!historyItem) return null;
  const list = checkData(historyItem);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // const [diffTimes, setDiffTimes] = useState(diffTime);
  const [newPeriods, setPeriods] = useState(diffTime < 0 ? periodCount - 1 : periodCount);
  const [openNums, setOpenNums] = useState(diffTime < 0 ? '???' : '');
  const [openData, setOpenData] = useState(diffTime < 0 ? list : []);
  let daysCount = moment().dayOfYear(); // 今年的第几天
  const years = moment().year(); // 今年
  const today = moment().format('YYYY-MM-DD'); // 今天日期
  let countDownDate = moment(today + ' ' + openTime).valueOf(); //  距离开奖时间小时

  const getOpenData = async () => {
    const result = await fetch(CLIENT_API + '/open/' + `${periodCount}`);
    return await result.json();
  }

  const createOpenHistoryData = async (params) => {
    const result = await fetch(CLIENT_API + '/history/create', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(params),
    });
    return await result.json();
  }

  console.log('list:', historyItem.periods, periodCount);

  useEffect(() => {
    let updateTime = setInterval(async () => {
      let now = new Date().getTime();
      let difference = countDownDate - now < 0 ? 0 : countDownDate - now;
      let newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      let newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        console.log('进来清除了'); // 也就是开奖触发时间
        const result = await getOpenData()
        const item = result.data[0] || {};
        setOpenData(checkData(item))
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setPeriods(periodCount)
        setOpenNums(result?.data[0]?.particular)
        if (historyItem?.periods !== periodCount) {
          console.log('插入新数据', item);
          createOpenHistoryData(item)
        }
      }
    })
    return () => {
      clearInterval(updateTime);
    }
  }, []);

  return (
    <div className="flex w-full flex-col gap-5 p-5">
      <div className='text-base'> {title}第{newPeriods}期开奖结果： </div>
      <ul className="flex flex-wrap justify-between gap-2">
        {openData?.reverse().map((item, index) => (
          <li key={item.ordinary + item.property}
            className={index < 6
              ? `text-${item.color}-600 flex w-1/6 flex-1 flex-col items-center pt-2`
              : `text-${item.color}-600 ml-4 flex w-1/6 flex-1 flex-col items-center pt-2 font-bold`
            }
          >
            <div className="relative">
              <Image
                className={index < 6 ? '' : `shadow-md shadow-${item.color}-500 rounded-full`}
                src={colorList.filter((color) => color.color == item.color)[0]?.url}
                alt="Vercel Logo"
                priority
                quality={100}
                width={index < 6 ? 100 : 120}
                height={index < 6 ? 100 : 120}
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
              <div className="p-1 text-center text-sm">
                <span className={`text-${item.color}-600 `}>
                  {item.property?.substring(0, 1)}
                </span>
                <span className="text-black">{item.property?.substring(1)}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center text-sm">
        <div className=' text-sm'>
          {title}{Number(periodCount)}期开奖结果：{openNums}
        </div>
        <div className="flex items-center font-bold">
          <span className="mr-2 ">开奖倒计时:</span>
          {/* <CountDown time={countTime} format="HH 时 mm 分 ss 秒" className=" " /> */}
          <TimerContainer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          ></TimerContainer>
        </div>
      </div>
    </div>
  );
}
