import Image from 'next/image';

// 插图集合
export default function ImgList({ title = '' }) {
  return (
    <div className="flex w-full flex-wrap justify-between gap-1">
      <Image
        src="/images/roll-bg2.jpeg"
        alt="Vercel Logo"
        className="dark:invert"
        width={768}
        height={100}
        priority
        style={{ height: '100%', width: '100%' }}
      />
      <Image
        src="/images/roll-bg2.jpeg"
        alt="Vercel Logo"
        className="dark:invert"
        width={768}
        height={100}
        priority
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}
