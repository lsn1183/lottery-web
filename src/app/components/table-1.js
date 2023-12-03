import Image from "next/image";

export default function Table1({ data = [], periodCount }) {
  // console.log('table1', data);
  const latestItem = data[data?.length - 1]
  const recommendData = { ...latestItem, periods: periodCount, id: 0 } // 今期推荐数据
  const list = [recommendData, ...data.slice(8)]
  // console.log( 'period', list);
  return (
    <div className="w-full">
      <ul className="flex flex-col gap-1">
        {list.map((item, i) => (
          <li key={item.id} className="border-b-2 pb-4 pt-3 flex flex-col items-center">
            <div className="text-xl font-medium">
              <span>{item.periods}期：</span>
              <span className="text-blue-600 mr-1">xxx.com=精品24码=</span>
              <span className="text-red-500">
                开（{item.openNum || "?"}蛇）
              </span>
            </div>
            <p className="text-red-600 font-medium text-lg">{item.nums1}</p>
            <p className="text-red-600 font-medium text-lg">{item.nums2}</p>
            <p className="text-red-600 font-medium text-lg">{item.nums3}</p>
          </li>
        ))}
        <li className=" m-2 p-3 text-start">
          <p className="text-red-500 text-base">
            人生就像一场戏，在等待中错过了美丽。正如歌中所唱：该出手时就出手。因为财富就在你身边。当你付出时，财富从你身边轻轻划过，留下的是悔恨、遗憾。每个人的一生，成功都需要机遇，没有机遇，那你成功的可能性只有30%，而成功的人不单单是建立在有雄厚家底的基础上，更多的人是靠白手起家的，现在你的成功机遇来了，不要错过了就后悔莫及！把握机会，成功就在眼前！
          </p>
        </li>
      </ul>
      {/* <div className="w-full" style={{ backgroundImage: "url(/images/roll-bg3.gif)" }}></div> */}
      <Image src="/images/roll-bg3.gif" width={768} height={64} />
      <Image src="/images/roll-bg3.gif" width={768} height={64} />
    </div>
  );
}
