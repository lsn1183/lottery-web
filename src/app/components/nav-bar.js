import Image from 'next/image';

export default function Nav() {
  const navList = [
    { name: '挑码助手', url: '/icon/nav_tmzs.png' },
    { name: '开奖日期', url: '/icon/date.png' },
    { name: '号码属性', url: '/icon/nav_hmsx.png' },
    { name: '开奖记录', url: '/icon/nav_pc.png' },
  ];
  return (
    <div className="nav-bar w-full p-4">
      <div className="flex w-full justify-between">
        {navList.map((item) => (
          <div
            className="flex flex-col items-center justify-between text-base"
            key={item.name}
          >
            <Image
              src={item.url}
              alt="Vercel Logo"
              className="dark:invert"
              width={46}
              height={46}
              priority
            />
            <div className="p-2 text-stone-900">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
