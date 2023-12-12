import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';

export default function Table1({ data, title }) {
  const { recommendData, periodCount, openData } = data;
  // console.log('-periodCount:', periodCount);
  const lastIndex = recommendData?.length - 1;
  const lastIndex2 = recommendData?.length - 3;
  const lastIndex3 = data?.length - 5;
  const nums1 = recommendData[lastIndex]?.nums1;
  const nums2 = recommendData[lastIndex2]?.nums2;
  const nums3 = recommendData[lastIndex3]?.nums3;
  // 最新一期推荐，未开奖的
  const todayData = { nums1, nums2, nums3, periods: periodCount, id: 0 }; // 今期推荐数据

  const list = [
    todayData,
    ...recommendData.slice(0, 10).map((item) => {
      const openItem = getOpenItem(openData, item);
      return { ...item, ...openItem };
    }),
  ];

  // console.log('Table1-list', list);
  return (
    <div className="w-full">
      <ul className="flex flex-col gap-1">
        {list.map((item, i) => (
          <li key={item.id} className="flex flex-col items-center border-b-2 pb-4 pt-3">
            <div className="text-xl font-medium">
              <span>{item.periods}期：</span>
              <span className="mr-1 text-blue-600">xxx.com=精品24码=</span>
              <span className="text-red-500">
                开: {item.openNum || '???'}
                {item.openName}
              </span>
            </div>
            <p className="text-lg font-bold text-red-600">
              {item.nums1?.split('.').map((ele, i) => (
                <span key={ele} className={ele == item.openNum ? ' rounded-lg bg-lime-100' : ''}>
                  {ele}
                  {i < 6 ? '.' : ''}
                </span>
              ))}
            </p>
            <p className="text-lg font-bold text-red-600">
              {item.nums2?.split('.').map((ele, i) => (
                <span key={ele} className={ele == item.openNum ? ' rounded-lg bg-lime-100' : ''}>
                  {ele}
                  {i < 6 ? '.' : ''}
                </span>
              ))}
            </p>
            <p className="text-lg font-bold text-red-600">
              {item.nums3?.split('.').map((ele, i) => (
                <span key={ele} className={ele == item.openNum ? ' rounded-lg bg-lime-100' : ''}>
                  {ele}
                  {i < 6 ? '.' : ''}
                </span>
              ))}
            </p>
          </li>
        ))}
        <li className=" m-2 p-3 text-start">
          <p className="text-base text-red-500">
            人生就像一场戏，在等待中错过了美丽。正如歌中所唱：该出手时就出手。因为财富就在你身边。当你付出时，财富从你身边轻轻划过，留下的是悔恨、遗憾。每个人的一生，成功都需要机遇，没有机遇，那你成功的可能性只有30%，而成功的人不单单是建立在有雄厚家底的基础上，更多的人是靠白手起家的，现在你的成功机遇来了，不要错过了就后悔莫及！把握机会，成功就在眼前！
          </p>
        </li>
      </ul>
      {/* <div className="w-full" style={{ backgroundImage: "url(/images/roll-bg3.gif)" }}></div> */}
      <Image src="/images/roll-bg3.gif" alt='bg3' width={768} height={64} />
      <Image src="/images/roll-bg3.gif" alt='bg1' width={768} height={64} />
    </div>
  );
}