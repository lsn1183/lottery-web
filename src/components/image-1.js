import Image from 'next/image';
// 四不像
export default function ImgOne({ periodCount }) {
  return (
    <div className=" w-full">
      <Image
        src={`/images/四不像/${periodCount}.png`}
        alt='img'
        width={768}
        height={100}
      />
    </div>
  );
}
