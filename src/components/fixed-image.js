import Image from 'next/image';
// 插图集合
export default function Header({ periodCount }) {
  return (
    <div className="header">
      <Image
        src="/images/8787.gif"
        alt="Vercel Logo"
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