import Image from 'next/image';

// 玄机图
export default function ImageTwo({ periodCount }) {
  return (
    <div className=" flex w-full flex-wrap justify-between gap-1 bg-red-600">
      <p className="top-7 pl-5 pr-5 text-2xl text-yellow-300">
        财神爷送特码，财运来了，挡也挡不住！！
      </p>
      <Image
        src={`/images/玄机图/${periodCount}.png`}
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
