import Image from 'next/image';
// import sharp from 'sharp';
// 插图集合
export default function ImgList({ title = '' }) {
  const list = [
    { desc: title, url: '/images/nav/nav-1.png' },
    { desc: title, url: '/images/nav/nav-5.gif' },
    { desc: title, url: '/images/nav/nav-4.webp' },
    // { desc: title, url: '/images/nav/4.png' },
    // { desc: title, url: '/images/nav/1.png' },
    // { desc: title, url: '/images/nav/1.png' },
  ];

  return (
    <div className="mt-2 flex flex-wrap justify-start bg-orange-200 p-2 font-bold ">

      {list.map((item, index) => (
        <div key={index} className="c_item flex-1 border">
          <div className="relative" style={{ height: '80%' }}>
            <Image
              src={item.url}
              alt="img"
              sizes="(max-width: 768px) 100vw, 33vw"
              width={100}
              height={120}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="flex-1 p-2 text-center text-base">{item.desc}</div>
        </div>
      ))}
      <div className=' relative'>
        <Image
          src='/images/icons/WX20240102-175148@2x.png'
          alt="img"
          width={768}
          height={100}
          priority
          style={{ height: "100%", width: "100%" }}
        />
        <div className='absolute text-[#f80ab0] top-2 left-8 text-6xl'>欧洲彩</div>

        <div className=' absolute top-6 right-8 bg-green-500 rounded-full animate-bounce'>
          <Image
            src='/images/nav/nav-3.jpeg'
            alt="img"
            width={60}
            height={60}
            priority
          />
        </div>
      </div>
      <div className='text-2xl animate-bounce font-medium text-red-600'>全网独家爆料，彩民们都赚疯了！！！</div>
    </div>
  );
}
