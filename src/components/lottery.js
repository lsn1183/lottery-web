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
  const historyFirstItem = openHistoryData[0];
  // console.log('historyList', historyList);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [newPeriods, setPeriods] = useState(diffTime <= 0 ? periodCount : periodCount - 1 || 365);
  const [openData, setOpenData] = useState([]);
  let timerRef = useRef(null);
  let updateTimeRef = useRef(null)
  const month = moment().format("MM"); // 今月
  const day = moment().format("DD"); // 今天
  const today = moment().format('YYYY-MM-DD'); // 今天日期
  const openDate = moment(today + ' ' + openTime).valueOf(); // 倒数时间，距离开奖时间小时 输出时间戳，单位为毫秒
  const endTime = moment().endOf('day').valueOf(); // 23:59 输出时间戳，单位为毫秒
  let diffOpenTimeEnd = Math.floor(((endTime - openDate) / 1000) / 60); // 今天结束最后时间,分钟
  const [list, setList] = useState([])
  async function func(args) {
    //函数本身的逻辑
    //函数执行完后，重置定时器
    let now = new Date().getTime();
    let differenceS = Math.floor((openDate - now) / 1000); // 开奖与此刻的误差时间, 秒， 正负 60秒1分钟 
    let diffEndTime = Math.floor(((endTime - now) / 1000) / 60); // 计算即将结束今天时间误差, 分钟

    // console.log('diffEndTime', diffEndTime, 'diffOpenTimeEnd', diffOpenTimeEnd);
    /**
     * 大于diffEndTime > diffOpenTimeEnd (开奖前)，
     * diffEndTime = diffOpenTimeEnd 正在开奖，
     *  diffEndTime < diffOpenTimeEnd 开奖后
     */
    if (diffEndTime > diffOpenTimeEnd) { // 开奖前
      console.log('开奖前');
      differenceS = Math.floor((openDate - now) / 1000); // 秒
    } else if (diffEndTime == diffOpenTimeEnd) { // 正在开奖
      console.log('正在开奖中');
    } else {  // 开奖后， 恢复计时器
      console.log('开奖后');
      differenceS = Math.floor(((openDate + 24 * 60 * 60 * 1000) - now) / 1000); //  秒
    }
    // console.log('difference: ', differenceS, "diffTime：", diffTime);

    let newDays = Math.floor(differenceS / (60 * 60 * 24));
    let newHours = Math.floor((differenceS % (60 * 60 * 24)) / (60 * 60));
    let newMinutes = Math.floor((differenceS % (60 * 60)) / (60));
    let newSeconds = Math.floor((differenceS % (60)));
    // console.log('newMinutes: ', newMinutes, "newSeconds", newSeconds);
    // setDays(newDays);
    setHours(newHours < 0 ? 0 : newHours);
    setMinutes(newMinutes < 0 ? 0 : newMinutes);
    setSeconds(newSeconds < 0 ? 0 : newSeconds);

    if (differenceS > 10 && differenceS < 5 * 60) { // 大于10秒，小于 5分钟
      setOpenData([]);// 开奖前清空旧数据
      setPeriods(periodCount)
    }
    if (differenceS <= 0) {
      clearTimeout(updateTimeRef);
      console.log('进来开奖动画了'); // 也就是开奖触发时间
      const result = await getOpenData(periodCount)
      const openItem = result.data[0] || {};
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      let t = 3000;
      let arr = [];
      // console.log('openData', openData, arr);
      if (list.length === 0 || list.length < 7) {
        convertOpenData(openItem).forEach((element, index) => {
          (function (element, index) {
            timerRef = setTimeout((value) => {
              arr.push(value)
              list[index] = value
              setList([...arr])
              // console.log('value, index', value, index, arr, list);
              setOpenData([...arr])
              if (index == 6) {
                console.log('插入新数据, 开奖完成', list);
                // updateTimeRef = setInterval(func, 1000)
                updateTimeRef = setTimeout(func, 1000, args);
                clearTimeout(timerRef)
                // setOpenData([...list])
              }
            }, t * index, element);

          })(element, index)
        })
      } else {
        updateTimeRef = setTimeout(func, 1000, args);
      }

    } else {
      updateTimeRef = setTimeout(func, 1000, args);
    }
  }

  const init = () => {
    // console.log(1, diffTime,  historyFirstItem?.periods == periodCount - 1 );
    let historyList = []
    if (historyFirstItem) {
      historyList = convertOpenData(historyFirstItem);
    }
    if (diffTime > 300) { // 大于5分钟
      // console.log('historyList', historyList);
      historyFirstItem?.periods == periodCount - 1 ?
        setOpenData(historyList) : getOpenData(periodCount - 1).then(result => {
          const openItem = result.data[0] || {};
          setOpenData(convertOpenData(openItem))
        });
    } else {
      // console.log(2, historyFirstItem, periodCount);
      if (diffTime <= -60 && historyFirstItem?.periods < periodCount) {
        // console.log(2);
        getOpenData(periodCount).then(result => {
          const openItem = result.data[0] || {};
          setOpenData(convertOpenData(openItem))
        })
      }
    }
  }

  // TO DO 使用webscok还是轮询进行时间数据交换
  useEffect(() => {
    init();
    updateTimeRef = setTimeout(func, 1000, '')
    // console.log('openData:', openData);
    return () => {
      clearTimeout(updateTimeRef);
      clearTimeout(timerRef)
    }
  }, []);
  // console.log('list:', historyFirstItem.periods, periodCount,);
  const periodNumToStr = (num) => {
    let newPeriodCount = num;
    return newPeriodCount < 10 ? '00' + newPeriodCount : newPeriodCount < 100 ? '0' + newPeriodCount : newPeriodCount
  }

  const onLoadeData = () => {
    console.log('点击了');
  }

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
            {title}第<span className='text-red-500'>{periodNumToStr(newPeriods)}</span>期开奖：
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

        <ul className="flex justify-start gap-2 h-24">
          {openData?.map((item, index) => (
            <li key={item?.ordinary + item?.property}
              className={index < 6
                ? `flex w-1/6 flex-1 flex-col items-center justify-start pt-2 max-w-[100px]`
                : `flex w-1/6 flex-1 flex-col items-center pt-2 ml-4 relative max-w-[100px]`
              }
            >
              {/* 加号分割特码 */}
              {index === 6 &&
                <div className="text-4xl z-10 from-purple-400 text-gray-600 absolute top-3 left-[-1.5rem]">+</div>
              }
              <div className={diffTime == 0 ? "relative slide-in-right max-w-[100px]" : "relative max-w-[100px]"}>
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
        <div className="text-xl font-medium flex items-center justify-between">
          {/* <span>{diffTime}</span> */}
          <div>第<span className='text-red-500'>{periodNumToStr(periodCount)}</span>期开奖:
            <span className='text-red-500 text-base'> {month}月{day}日 {weeks[moment().day()]} 22点35分</span></div>
          {/* <p>
            {title}{Number(periodCount)}期开奖结果：{openNums}
          </p> */}
          {/* <button className=' border pt-1 pb-1 pl-2 pr-2 text-base text-red-600' onClick={onLoadeData}>刷新</button> */}
        </div>
      </div>
    </div>
  );
}
