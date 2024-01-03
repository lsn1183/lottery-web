import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  const navList = [
    { name: '挑码助手', url: '/icon/nav_tmzs.png', path: '/helper' },
    { name: '开奖日期', url: '/icon/date.png', path: '/date' },
    { name: '号码属性', url: '/icon/nav_hmsx.png', path: '/attribute' },
    { name: '开奖记录', url: '/icon/nav_pc.png', path: '/history' },
  ];
  return (
    <div className="nav-bar w-full p-4 font-bold">
      <div className="flex w-full justify-between">
        {navList.map((item) => (
          <Link className="flex flex-col items-center justify-between text-base" key={item.name} href={item.path} passHref prefetch={false}>
            <a>

              <Image
                src={item.url}
                alt="img"
                className="dark:invert"
                width={46}
                height={46}
                priority
              />
              <div className="p-2 text-stone-900">{item.name}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
