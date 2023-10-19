export default function Table1() {
  const list = [
    {
      periods: 280,
      open: "",
      selection: "42.40.46.28.18.01.27.03.25.23.11.3",
      animals: [
        "狗",
        "狗.鸡",
        "狗.鸡.虎",
        "狗.鸡.虎.羊",
        "狗.鸡.虎.羊.猪",
        "狗.鸡.虎.羊.猪.牛",
        "狗.鸡.虎.羊.猪.牛.兔",
        "狗.鸡.虎.羊.猪.牛.兔.马",
        "狗.鸡.虎.羊.猪.牛.兔.马.猴",
      ],
    },
    {
      periods: 277,
      selection: "42.40.46.28.18.01.27.03.25.23.11.3",
      open: "25猪",
      animals: [
        "狗",
        "狗.鸡",
        "狗.鸡.虎",
        "狗.鸡.虎.羊",
        "狗.鸡.虎.羊.猪",
        "狗.鸡.虎.羊.猪.牛",
        "狗.鸡.虎.羊.猪.牛.兔",
        "狗.鸡.虎.羊.猪.牛.兔.马",
        "狗.鸡.虎.羊.猪.牛.兔.马.猴",
      ],
    },
    {
      periods: 276,
      selection: "42.40.46.28.18.01.27.03.25.23.11.3",
      open: "45猪",

      animals: [
        "狗",
        "狗.鸡",
        "狗.鸡.虎",
        "狗.鸡.虎.羊",
        "狗.鸡.虎.羊.猪",
        "狗.鸡.虎.羊.猪.牛",
        "狗.鸡.虎.羊.猪.牛.兔",
        "狗.鸡.虎.羊.猪.牛.兔.马",
        "狗.鸡.虎.羊.猪.牛.兔.马.猴",
      ],
    },
    {
      periods: 275,
      selection: "42.40.46.28.18.01.27.03.25.23.11.3",
      open: "33猴",

      animals: [
        "狗",
        "狗.鸡",
        "狗.鸡.虎",
        "狗.鸡.虎.羊",
        "狗.鸡.虎.羊.猪",
        "狗.鸡.虎.羊.猪.牛",
        "狗.鸡.虎.羊.猪.牛.兔",
        "狗.鸡.虎.羊.猪.牛.兔.马",
        "狗.鸡.虎.羊.猪.牛.兔.马.猴",
      ],
    },
    {
      periods: 274,
      selection: "42.40.46.28.18.01.27.03.25.23.11.3",
      open: "23猴",
      animals: [
        "狗",
        "狗.鸡",
        "狗.鸡.虎",
        "狗.鸡.虎.羊",
        "狗.鸡.虎.羊.猪",
        "狗.鸡.虎.羊.猪.牛",
        "狗.鸡.虎.羊.猪.牛.兔",
        "狗.鸡.虎.羊.猪.牛.兔.马",
        "狗.鸡.虎.羊.猪.牛.兔.马.猴",
      ],
    },
  ];
  return (
    <div className="w-full">
      {/* <div
        className="w-full h-14 flex justify-center items-center text-2xl border-lime-300 text-yellow-300 bg-img"
        style={{ backgroundImage: "url(/images/roll-bg2.jpeg)" }}
      ></div>
      <div
        className="w-full h-14 flex justify-center items-center text-2xl border-lime-300 text-yellow-300 bg-img"
        style={{ backgroundImage: "url(/images/roll-bg5.gif)" }}
      ></div> */}
      <div
        className="w-full h-14 flex justify-center items-center text-2xl border-lime-300  bg-img"
        style={{
          backgroundImage: "url(/images/roll-bg2.jpeg)",
          color: "rgb(255, 255, 0)",
        }}
      >
        <p>↓↓↓ 请大家记住新网址 ↓↓↓</p>
      </div>
      <div className="">
        {list.map((item,index) => (
          <div
            key={item.periods + index}
            className="flex justify-around flex-col items-center font-bold"
            style={{
              height: "175px",
              borderBottom: "1px solid #ccc",
              fontSize: "15pt",
            }}
          >
            <div className="" style={{ color: "#CC0033" }}>
              <span>289期</span>:<span>①波</span>
              <span>①头主10码</span>:<span>开????</span>
            </div>
            <div>
              <span style={{ color: "#0033CC" }}>①波</span>
              〖蓝波+红波〗
              <span style={{ color: "#0033CC" }}>①头</span>
              〖410头〗
            </div>
            <div>
              <span style={{ color: "#0033CC" }}>主10码</span>
              <span>:</span>
              <span>04.06.09.26.10.05.20.14.42.27</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
