export default function Table4({ title }) {
  const list = [
    {
      periods: 298,
      open: '',
      selection: '42.40.46.28.18.01.27.03.25.23.11.3',
      animals: [
        '狗',
        '狗.鸡',
        '狗.鸡.虎',
        '狗.鸡.虎.羊',
        '狗.鸡.虎.羊.猪',
        '狗.鸡.虎.羊.猪.牛',
        '狗.鸡.虎.羊.猪.牛.兔',
        '狗.鸡.虎.羊.猪.牛.兔.马',
        '狗.鸡.虎.羊.猪.牛.兔.马.猴',
      ].reverse(),
    },
    {
      periods: 277,
      selection: '42.40.46.28.18.01.27.03.25.23.11.3',
      open: '14猴',
      animals: [
        '狗',
        '狗.鸡',
        '狗.鸡.虎',
        '狗.鸡.虎.羊',
        '狗.鸡.虎.羊.猪',
        '狗.鸡.虎.羊.猪.牛',
        '狗.鸡.虎.羊.猪.牛.兔',
        '狗.鸡.虎.羊.猪.牛.兔.马',
        '狗.鸡.虎.羊.猪.牛.兔.马.猴',
      ].reverse(),
    },
    {
      periods: 276,
      selection: '42.40.46.28.18.01.27.03.25.23.11.3',
      open: '41猴',
      animals: [
        '狗',
        '狗.鸡',
        '狗.鸡.虎',
        '狗.鸡.虎.羊',
        '狗.鸡.虎.羊.猪',
        '狗.鸡.虎.羊.猪.牛',
        '狗.鸡.虎.羊.猪.牛.兔',
        '狗.鸡.虎.羊.猪.牛.兔.马',
        '狗.鸡.虎.羊.猪.牛.兔.马.猴',
      ].reverse(),
    },
    {
      periods: 275,
      selection: '42.40.46.28.18.01.27.03.25.23.11.3',
      open: '4猴',

      animals: [
        '狗',
        '狗.鸡',
        '狗.鸡.虎',
        '狗.鸡.虎.羊',
        '狗.鸡.虎.羊.猪',
        '狗.鸡.虎.羊.猪.牛',
        '狗.鸡.虎.羊.猪.牛.兔',
        '狗.鸡.虎.羊.猪.牛.兔.马',
        '狗.鸡.虎.羊.猪.牛.兔.马.猴',
      ].reverse(),
    },
    {
      periods: 274,
      selection: '42.40.46.28.18.01.27.03.25.23.11.3',
      open: '40猴',
      animals: [
        '狗',
        '狗.鸡',
        '狗.鸡.虎',
        '狗.鸡.虎.羊',
        '狗.鸡.虎.羊.猪',
        '狗.鸡.虎.羊.猪.牛',
        '狗.鸡.虎.羊.猪.牛.兔',
        '狗.鸡.虎.羊.猪.牛.兔.马',
        '狗.鸡.虎.羊.猪.牛.兔.马.猴',
      ].reverse(),
    },
  ];
  return (
    <div className="w-full">
      <div
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300 text-2xl text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll-bg4.gif)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300 text-2xl text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll-bg5.gif)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300  text-2xl"
        style={{
          backgroundImage: 'url(/images/roll-bg2.jpeg)',
          color: '#FFFF00',
        }}
      >
        <p>{title}内部揭秘(内部透密十肖)</p>
      </div>
      <div>
        {list.map((item, i) => (
          <div key={item.periods + i}>
            <div className="header flex h-12 items-center justify-center bg-orange-300 p-1 text-lg ">
              <span>精选：</span>
              <span>{item.selection}</span>
            </div>
            <ul>
              {item.animals?.map((child, index) => (
                <li
                  key={child.id}
                  className="flex h-10 text-base font-medium"
                  style={{ borderTop: '1px solid #ccc' }}
                >
                  <div className="flex w-28 items-center justify-center bg-amber-200">
                    <span>{item.periods}</span>
                    <span>期</span>
                    <span>{child?.split('.').length}</span>
                    <span>肖</span>
                  </div>
                  <div className="flex flex-1 items-center justify-center text-base text-red-600">
                    {child}
                  </div>
                  <div className="flex  w-24 items-center justify-center bg-amber-200">
                    {item.open || '??????'}
                  </div>
                </li>
              ))}
            </ul>
            <div className="footer flex h-8 items-center justify-center bg-cyan-300 p-1 text-base font-bold text-rose-500">
              长期跟踪有惊喜！
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
