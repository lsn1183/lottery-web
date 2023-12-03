import Image from "next/image";


const inertDataFunctions = (length) => {
  // inertOpenDataSource(length)  // 往open数据库插入历史开奖数据
  // inertRemmDatabase(length)
}

// 插图集合
export default function Header({ periodCount }) {
  inertDataFunctions(periodCount)
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
        style={{ objectFit: "contain", width: "100%", height: "auto" }}
      />
    </div>
  );
}
