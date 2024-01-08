import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Table1({ data }) {
  const { periodCount } = data
  const { recommendData, openHistoryData } = data;

  const list = [
    ...recommendData.map((item) => {
      const openItem = getOpenItem(openHistoryData, item);
      let { periods } = item
      periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods
      return { ...item, ...openItem, periods };
    }),
  ];

  const periodNumToStr = (num) => {
    let newPeriodCount = num;
    return newPeriodCount < 10 ? '00' + newPeriodCount : newPeriodCount < 100 ? '0' + newPeriodCount : newPeriodCount
  }

  return (
    <div className="w-full">
      {/* 诗句 */}
      <div className="text-basefont-medium bg-red-500 text-black pt-2 pb-2 text-center">
        <div className=' text-yellow-300'>第{periodNumToStr(periodCount)}期玄机诗</div>
        {
          periodCount == 8 && <div>
            <p>二牛六蛇合八码，今期生肖守为主</p>
            <p>金木水火留不住，唯独老牛未见开</p>
            <p>猴后灵牛头发角，提六吼九必功成</p>
          </div>
        }
      </div>
      <ul className="flex flex-col gap-1">
        {list.map((item, i) => (
          <li key={item.id} className="flex flex-col gap-1 items-center border-b-2 text-2xl">
            <div className="flex items-center justify-center text-2xl font-medium">
              <span>{item.periods}期：</span>
              <Link prefetch={false} href='https://12312378.xyz' className="text-xl text-blue-600">精品24码=12312378.xyz=</Link>
              <span className="">
                开:{item.openNum || '????'}
                {item.openName}
              </span>
            </div>
            <div className="font-mono font-bold text-red-600 flex">
              <Image
                width={30}
                height={30}
                alt="img"
                src='/images/icons/xuanzhuan.gif'
              />
              {item.nums1?.split('.').map((ele, i) => (
                <span key={ele} className={ele == item.openNum ? ' rounded-lg bg-yellow-200' : ''}>
                  {ele}
                  {i < 7 ? '.' : ''}
                </span>
              ))}
            </div>
            <div className="font-mono font-bold text-red-600 flex">
              <Image
                width={30}
                height={30}
                alt="img"
                src='/images/icons/xuanzhuan.gif'
              />
              {item.nums2?.split('.').map((ele, i) => (
                <span key={ele} className={ele == item.openNum ? ' rounded-lg bg-yellow-200' : ''}>
                  {ele}
                  {i < 7 ? '.' : ''}
                </span>
              ))}
            </div>
            <div className=" font-mono font-bold text-red-600 flex">
              <Image
                width={30}
                height={30}
                alt="img"
                src='/images/icons/xuanzhuan.gif'
              />
              {item.nums3?.split('.').map((ele, i) => (
                <span key={ele} className={ele == item.openNum ? ' rounded-lg bg-yellow-200' : ''}>
                  {ele}
                  {i < 7 ? '.' : ''}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
