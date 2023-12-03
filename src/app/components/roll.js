
export default async function Roll({}) {

  return (
    <div className="roll w-full pt-1 pb-1">
      {/* 滚动图 */}
      <div
        className="pt-2 pb-2"
        style={{ backgroundImage: "url(/images/roll-bg.png)" }}
      >
        <p className="animate">
          欢迎光临【港澳新彩】论坛★汇集网上最全港澳新彩资料★永久域名:123.com
          请记
        </p>
      </div>
      {/* 背景图 */}
      <div
        className="pt-4 pb-4 flex justify-center items-center border-lime-300 text-yellow-300 text-xl"
        style={{ backgroundImage: "url(/images/roll-bg2.jpeg)" }}
      >
        港澳新彩精品24码，欢迎喝彩123.com
      </div>
    </div>
  );
}
