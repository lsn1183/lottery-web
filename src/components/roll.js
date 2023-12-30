export default function Roll({ title }) {
  return (
    <div className="roll w-full pb-1 pt-1">
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
        className="flex items-center justify-center border-lime-300 pb-4 pt-4 text-xl text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll-bg2.jpeg)' }}
      >
        {title}精品24码，欢迎喝彩123.com
      </div>
    </div>
  );
}
