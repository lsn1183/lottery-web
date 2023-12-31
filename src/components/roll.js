export default function Roll({ title }) {
  return (
    <div className="roll w-full pb-1 pt-1 font-bold">
      {/* 滚动图 */}
      <div
        className="pb-2 pt-2"
        style={{ backgroundImage: 'url(/images/roll-bg.png)' }}
      >
        <p className="animate">
          欢迎光临【{title}】论坛★汇集网上最全最新资料★永久域名:12312378.xyz，请记！
        </p>
      </div>
      {/* 背景图 */}
      <div
        className="flex items-center justify-center border-lime-600 pb-4 pt-4 text-xl text-[#102bde]"
        style={{ backgroundImage: 'url(/images/roll-bg2.jpeg)' }}
      >
        {title}精品24码，欢迎喝彩12312378.xyz
      </div>
    </div>
  );
}
