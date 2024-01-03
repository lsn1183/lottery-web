import Image from 'next/image';
// 插图集合
export default function ImgOne({ title = '' }) {
  return (
    <div className="mt-2 flex flex-wrap justify-start bg-orange-200 p-2 font-bold ">
      <Image src="/images/image-1/2.png" alt='img' width={768} height={100} />
    </div>
  );
}
