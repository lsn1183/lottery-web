export default function Table1() {
  const list = [
    {
      periods: 278,
      open:'',
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
      open:'44猴',
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
      open:'44猴',

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
      open:'44猴',

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
      open:'44猴',
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
      <div
        className="w-full h-14 flex justify-center items-center text-2xl border-lime-300 text-yellow-300 bg-img"
        style={{ backgroundImage: "url(/images/roll-bg4.gif)" }}
      ></div>
      <div
        className="w-full h-14 flex justify-center items-center text-2xl border-lime-300 text-yellow-300 bg-img"
        style={{ backgroundImage: "url(/images/roll-bg5.gif)" }}
      ></div>
      <div
        className="w-full h-14 flex justify-center items-center text-2xl border-lime-300 text-yellow-300 bg-img"
        style={{ backgroundImage: "url(/images/roll-bg2.jpeg)" }}
      >
        <p>港澳新彩论坛(必中8肖)</p>
      </div>
      <div>
        {list.map((item) => (
          <>
            <div className="header h-12 p-1 text-lg flex justify-center items-center" style={{backgroundColor: '#4e83f4', color:'#343c4c'}}>
              <span>精选：</span>
              <span>{item.selection}</span>
            </div>
            <ul>
              {item.animals?.map((child,index) => (
                <li key={item.periods} className="flex h-10 font-bold" style={{borderTop: '1px solid #ccc'}}>
                  <div className="w-40  flex justify-center items-center" style={{backgroundColor: 'rgb(0, 204, 51)'}}>{item.periods}
                  <span>期</span>
                  <span>{child?.split('.').length}</span>
                  <span>肖</span>
                  </div>
                  <div className=" flex-auto flex justify-center items-center text-red-600 text-sm">{child}</div>
                  <div className="w-40  flex justify-center items-center" style={{backgroundColor: 'rgb(0, 204, 51)'}}>{item.open || '??????'}</div>
                </li>
              ))}
            </ul>
            <div className="footer h-12 p-1 bg-cyan-400 text-zinc-600 flex justify-center items-center text-xl">见证奇迹，成就梦想，彩霸王</div>
          </>
        ))}
      </div>
    </div>
  );
}
