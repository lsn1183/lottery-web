import Image from 'next/image';
// import sharp from 'sharp';
// 插图集合
export default function ImgList({ title = '' }) {
  const list = [
    { desc: title, url: '/images/nav/1.png' },
    { desc: title, url: '/images/nav/2.png' },
    { desc: title, url: '/images/nav/5.png' },
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
              alt="Vercel Logo"
              sizes="(max-width: 768px) 100vw, 33vw"
              width={100}
              height={120}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="flex-1 p-2 text-center text-base">{item.desc}</div>
        </div>
      ))}
      <Image
        src='/images/icons/欧洲建筑.png'
        alt="V"
        width={768}
        height={100}
        priority
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
