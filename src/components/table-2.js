import { nameToNum } from '@/utils/utils';

export default function Table2({ data, title }) {
  const { zodiacData, animalData } = data;
  // console.log('data', data);
  const list = zodiacData?.map((item, i) => {
    let newItem = {};
    let selection = nameToNum(item.names, animalData).join('.');
    let arr = item.names.split('.');
    let animals = arr.map((name, index) => {
      return index === 0 ? name : arr.slice(0, index + 1).join('.');
    });
    newItem = { ...item, selection, animals };
    return newItem;
  });
  // console.log(list, '11111-Table2');
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
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300 text-2xl text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll-bg2.jpeg)' }}
      >
        <p>{title}论坛(必中九肖)</p>
      </div>
      <div>
        {list.map((item, index) => (
          <div key={item.id}>
            <div className="header flex h-12 items-center justify-center bg-blue-500 p-1 text-lg text-slate-800">
              <span>精选：</span>
              <span>{item.selection}</span>
            </div>
            <ul>
              {item.animals?.map((child) => (
                <li
                  key={item.periods + index + child}
                  className="flex h-10"
                  style={{ borderTop: '1px solid #ccc' }}
                >
                  <div
                    className="flex w-20 items-center justify-center text-sm font-medium"
                    style={{ backgroundColor: 'rgb(0, 204, 51)' }}
                  >
                    <span>{item.periods}</span>
                    <span>期</span>
                    <span>{child?.split('.').length}</span>
                    <span>肖</span>
                  </div>
                  <div className="flex flex-1 items-center justify-center text-sm font-semibold text-red-600">
                    {child}
                  </div>
                  <div
                    className="flex  w-20 items-center justify-center"
                    style={{ backgroundColor: 'rgb(0, 204, 51)' }}
                  >
                    {item.open || '??????'}
                  </div>
                </li>
              ))}
            </ul>
            <div className="footer flex h-12 items-center justify-center bg-cyan-300 p-1 text-xl text-zinc-800">
              见证奇迹，成就梦想，彩霸王
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
