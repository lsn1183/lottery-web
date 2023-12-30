import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';

export default function Table1({ data, title }) {
  const { recommendData, periodCount, openHistoryData } = data;

  const list = [
    ...recommendData.slice(0, 10).map((item) => {
      const openItem = getOpenItem(openHistoryData, item);
      return { ...item, ...openItem };
    }),
  ];
  // console.log('Table1-list', list);
  return (
    <div className="w-full">
      <ul className="flex flex-col gap-1">
        {list.map((item, i) => (
          <li key={item.id} className="flex flex-col items-center justify-around border-b-2 pb-1 pt-1">
            <div className="text-xl font-medium">
              <span>{item.periods}期：</span>
              <span className="mr-1 text-blue-600"><a href="http://12312378.xyz">12312378.com</a>=精品24码=</span>
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
