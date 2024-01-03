import Image from 'next/image';
// 插图集合
export default function Header({ periodCount }) {
  return (
    <div className="header">
      <Image
        src="/images/roll/roll-top.jpg"
        alt="img"
        priority
        sizes="(max-width: 768px) 100vw, 33vw"
        width={100}
        height={100}
        quality={100}
        style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
      />
      <Image
        src="/images/roll/roll-693836.gif"
        alt="img"
        priority
        quality={100}
        sizes="(max-width: 768px) 100vw, 33vw"
        width={100}
        height={100}
        style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
      />
    </div>
  );
}
