export default function Roll({ title }) {
  return (
    <div className="roll w-full pb-1 pt-1 font-bold">
      {/* 滚动图 */}
      <div
        className="pb-2 pt-2"
        style={{ backgroundImage: 'url(/images/roll/roll-bg.png)' }}
      >
        <p className="animate">
          欢迎光临【{title}】论坛★汇集网上最全最新资料★永久域名:12312378.xyz，请记！
        </p>
      </div>
      {/* 背景图 */}
      <div
        className="flex items-center justify-center border-lime-600 h-12"
        style={{ backgroundImage: 'url(/images/roll/roll-crazy.jpeg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}
      >
      </div>

    </div>
  );
}
