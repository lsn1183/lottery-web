'use client'
import { CLIENT_API } from '@/api/config';
import { colorList, weeks } from '@/utils/constant';
import { convertOpenData } from '@/utils/utils';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { TimerContainer } from './CountDown/timer';

const getOpenData = async (periodCount) => {
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

export default function Lottery({ data, title, openTime }) {
  const { openHistoryData, periodCount, diffTime } = data;
  // console.log('diffTime', diffTime);
  const historyItem = openHistoryData[0];
  if (!historyItem) return null;
  const historyList = convertOpenData(historyItem);
  // console.log('historyList', historyList);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [newPeriods, setPeriods] = useState(diffTime < 0 ? periodCount : periodCount - 1 || 365);
  const [openData, setOpenData] = useState(diffTime < 0 ? [] : historyList);
  let timerRef = useRef(null);
  let updateTimeRef = useRef(null)

  const daysCount = moment().dayOfYear(); // 今年的第几天
  const years = moment().year(); // 今年
  const month = moment().format("MM"); // 今月
  const day = moment().format("DD"); // 今月
  const today = moment().format('YYYY-MM-DD'); // 今天日期
  const openDate = moment(today + ' ' + openTime).valueOf(); // 倒数时间，距离开奖时间小时 输出时间戳，单位为毫秒
  const endTime = moment().endOf('day').valueOf(); // 23:59 输出时间戳，单位为毫秒
  const diffOpenTimeEnd = Math.floor((endTime - openDate) / 1000); // 今天结束最后时间

  async function func() {
    let arr = [];
    let t = 3500;
    let now = new Date().getTime();
    let diffEndTime = Math.floor((endTime - now) / 1000); // 计算即将结束今天时间误差 输出时间戳，单位为秒
    let difference = null;
    if (diffEndTime <= diffOpenTimeEnd) {
      difference = Math.floor(((diffOpenTimeEnd + openDate + (24 * 60 * 60 * 1000)) - now) / 1000); // 计算开奖误差时间, 秒
    } else {
      difference = Math.floor((openDate - now) / 1000); // 计算开奖误差时间, 秒
    }
    let newDays = Math.floor(difference / (60 * 60 * 24));
    let newHours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
    let newMinutes = Math.floor((difference % (60 * 60)) / (60));
    let newSeconds = Math.floor((difference % (60)));

    setDays(newDays);
    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);
    if (difference > 15 && difference <= 5 * 60) {
      setOpenData([]);// 开奖前清空旧数据
      // setPeriods(periodCount)

    }
    if (difference === 0) {
      clearInterval(updateTimeRef);
      // console.log('clearInterval:', updateTimeRef); // 也就是开奖触发时间
      const result = await getOpenData(periodCount)
      const openItem = result.data[0] || {};
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      convertOpenData(openItem).forEach((element, index) => {
        // console.log('element, index', element, index);
        (function (element, index) {
          let n = moment().valueOf()
          timerRef = setTimeout((value) => {
            arr.push(value)
            setOpenData([...arr])
            if (index == 6 && historyItem?.periods !== periodCount) {
              clearTimeout(timerRef)
              console.log('插入新数据, 开奖完成',);
              updateTimeRef = setInterval(func, 1000)
            }
          }, (index * t), element);

        })(element, index)
      })
      // }
      // if (historyItem?.periods !== periodCount) {
      //   console.log('插入新数据', item);
      //   // createOpenHistoryData(item)
      // }
    }

  }
  // TO DO 使用webscok还是轮询进行时间数据交换
  useEffect(() => {
    updateTimeRef = setInterval(func, 1000)

    // console.log('hello');
    if (diffTime < 0 && openData.length === 0) {
      getOpenData(periodCount).then(result => {
        const openItem = result.data[0] || {};
        // console.log(convertOpenData(openItem),'111111111');
        setOpenData(convertOpenData(openItem))
      })
    }
    return () => {
      clearInterval(updateTimeRef);
      clearTimeout(timerRef)
    }
  }, []);

  console.log('list:', historyItem.periods, periodCount, openData);
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center text-sm p-1 text-red-600'>
        <div className='flex'>
          <Image
            src='/images/icons/nahan.jpeg'
            alt="img"
            width={60}
            height={60}
            priority
          />
          <Image
            src='/images/icons/nahan.jpeg'
            alt="img"
            width={60}
            height={60}
            priority
          />
          <Image
            src='/images/icons/nahan.jpeg'
            alt="img"
            width={60}
            height={60}
            priority
          />
        </div>
        <Link href="/history" prefetch={false}>
          往期开奖记录{'>>'}
        </Link>
      </div>
      <div className="flex text-xl flex-col gap-5 p-2 font-bold">
        <div className='flex justify-between'>
          <div className='text-2xl'>
            {title}第<span className='text-red-500'>{newPeriods < 10 ? '00' + newPeriods : newPeriods < 100 ? '0' + newPeriods : newPeriods}</span>期开奖：

          </div>
          <div className="flex items-center font-bold">
            <TimerContainer
              // days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            ></TimerContainer>
          </div>
        </div>

        <ul className="flex justify-between gap-2">
          {openData?.map((item, index) => (
            <li key={item?.ordinary + item?.property}
              className={index < 6
                ? `flex w-1/6 flex-1 flex-col items-center pt-2`
                : `flex w-1/6 flex-1 flex-col items-center pt-2 ml-4 font-bold relative`
              }
            >
              {/* 加号分割特码 */}
              {index === 6 &&
                <div className="text-4xl z-10 from-purple-400 font-bold text-gray-600 absolute top-3 left-[-1.5rem]">+</div>
              }
              <div className={diffTime == 0 ? "relative slide-in-right" : "relative"}>
                <Image
                  className={index < 6 ? '' : `shadow-md shadow-${item.color}-500 rounded-full`}
                  src={colorList.filter((color) => color.color == item?.color)[0]?.url}
                  alt="Logo"
                  priority
                  quality={100}
                  width={100}
                  height={100}
                ></Image>
                <div
                  className="absolute font-bold"
                  style={{
                    left: '48%',
                    top: '25%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <span className={'text-3xl font-bold'}>
                    {item?.particular || item?.ordinary}
                  </span>
                </div>
                <div className="p-1 text-center text-base">
                  <span className="text-black">
                    {item?.property?.substring(0, 1)}
                  </span>
                  <span className="text-black">{item?.property?.substring(1)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-xl font-medium">
          <div>第<span className='text-red-500'>{periodCount < 10 ? '00' + periodCount : periodCount < 100 ? '0' + periodCount : periodCount}</span>期开奖:
            <span className='text-red-500 text-base'> {month}月{day}日 {weeks[moment().day()]} 22点35分</span></div>
          {/* <p>
            {title}{Number(periodCount)}期开奖结果：{openNums}
          </p> */}
        </div>
      </div>
    </div>
  );
}
