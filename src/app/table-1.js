import Image from "next/image";

export default function Table1() {
  const list = [
    {
      periods: 279,
      numbers: [
        "42.05.31.12.38.08.13.30",
        "09.46.10.14.48.44.23.22",
        "02.21.37.47.27.24.45.15",
      ],
      openNum: null,
    },
    {
      periods: 277,
      numbers: [
        "42.05.31.12.38.08.13.30",
        "09.46.10.14.48.44.23.22",
        "02.21.37.47.27.24.45.15",
      ],
      openNum: 14,
    },
    {
      periods: 276,
      numbers: [
        "42.05.31.12.38.08.13.30",
        "09.46.10.14.48.44.23.22",
        "02.21.37.47.27.24.45.15",
      ],
      openNum: 12,
    },
    {
      periods: 275,
      numbers: [
        "42.05.31.12.38.08.13.30",
        "09.46.10.14.48.44.23.22",
        "02.21.37.47.27.24.45.15",
      ],
      openNum: 16,
    },
    {
      periods: 274,
      numbers: [
        "42.05.31.12.38.08.13.30",
        "09.46.10.14.48.44.23.22",
        "02.21.37.47.27.24.45.15",
      ],
      openNum: 10,
    },
  ];
  return (
    <div className="w-full">
      <ul className="text-xl font-bold">
        {list.map((item,i) => (
          <li key={item.periods+item.openNum} className="border m-2 p-3 text-center">
            <div>
              <span>{item.periods}期：</span>
              <span className="text-blue-600 mr-1">123.com=精品24码=</span>
              <span className="text-red-500">
                开（{item.openNum || "?"}蛇）
              </span>
            </div>
            {item.numbers?.map((child) => (
              <p className="text-red-500">{child}</p>
            ))}
          </li>
        ))}
        <li className="border m-2 p-3 text-start">
          <p className="text-red-600 text-base">
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
