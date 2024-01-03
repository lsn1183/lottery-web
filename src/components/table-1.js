import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Table1({ data, title }) {
  const { recommendData, periodCount, openHistoryData } = data;

  const list = [
    ...recommendData.map((item) => {
      const openItem = getOpenItem(openHistoryData, item);
      let { periods } = item
      periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods
      return { ...item, ...openItem, periods };
    }),
  ];

  return (
    <div className="w-full">
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
        <li className=" m-2 p-3 text-start">
          <p className="text-sm text-red-500">
            人生就像一场戏，在等待中错过了美丽。正如歌中所唱：该出手时就出手。因为财富就在你身边。当你付出时，财富从你身边轻轻划过，留下的是悔恨、遗憾。每个人的一生，成功都需要机遇，没有机遇，那你成功的可能性只有30%，而成功的人不单单是建立在有雄厚家底的基础上，更多的人是靠白手起家的，现在你的成功机遇来了，不要错过了就后悔莫及！把握机会，成功就在眼前！
          </p>
        </li>
      </ul>
    </div>
  );
}
