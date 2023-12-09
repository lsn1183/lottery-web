import Image from 'next/image';

// 插图集合
export default function ImgList({ title = '' }) {
  return (
    <div className="relative flex w-full flex-wrap justify-between gap-1">
      <Image
        src="/images/test.jpg"
        alt="Vercel Logo"
        className="dark:invert"
        width={768}
        height={100}
        priority
        style={{ height: '100%', width: '100%' }}
      />
      {/* <p className=" absolute top-7 pl-5 pr-5 text-sm text-yellow-300">
        不要小瞧平特，中起来也是能赚到钱的，
        继续支持我的,保证带你们继续赢下去的。
      </p> */}
    </div>
  );
}
