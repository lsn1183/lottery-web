import Image from 'next/image';
// import sharp from 'sharp';
// 插图集合
export default function ImgList({ title = '' }) {
  const list = [
    { desc: title, url: '/images/001.gif' },
    { desc: title, url: '/images/002.gif' },
    { desc: title, url: '/images/003.gif' },
    { desc: title, url: '/images/004.gif' },
    { desc: title, url: '/images/005.gif' },
    { desc: title, url: '/images/002.gif' },
  ];

  // async function getImageData() { 
  //   const imagePath = '/path/to/image.jpg'; 
  //   const image = sharp(imagePath); 
  //   const imageBuffer = await image.resize(800, 600).toBuffer(); 
  //   return imageBuffer; 
  // }

  return (
    <div className="mt-2 flex flex-wrap justify-start bg-orange-200 p-2 font-bold ">
      {list.map((item, index) => (
        <div key={index} className="c_item flex-1 border">
          <div className="relative" style={{ height: '70%' }}>
            <Image
              src={item.url}
              alt="Vercel Logo"
              sizes="(max-width: 768px) 100vw, 33vw"
              width={100}
              height={100}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="flex-1 p-2 text-center text-base">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
