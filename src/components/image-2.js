import Image from 'next/image';

// 横财富玄机图， 特码真心版
export default function ImageTwo({ periodCount }) {
  return (
    <div className=" flex w-full flex-wrap justify-between gap-1 bg-yellow-300">
      <p className="top-7 pl-5 pr-5 text-2xl text-red-500">
        财运来了，耶稣都挡不住！！
      </p>
      <Image
        src={`/images/玄机图/${periodCount}-1.png`}
        alt="img"
        className="dark:invert"
        width={768}
        height={100}
        priority
        style={{ height: '100%', width: '100%' }}
      />

    </div>
  );
}
