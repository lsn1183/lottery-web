import { getOpenItem, nameToNum } from '@/utils/utils';

export default function Table2({ data, title }) {
  const { zodiacData, animalData, openHistoryData } = data;
  // console.log('zodiacData', zodiacData);
  let newItem, selection, arr, animals, openItem;
  const list = zodiacData?.map((item, i) => {
    newItem = {};
    selection = nameToNum(item.names, animalData);
    arr = item.names.split('.');
    openItem = getOpenItem(openHistoryData, item);
    animals = arr.map((name, index) => {
      return arr.slice(0, index + 1);
    });
    newItem = { ...item, selection, animals, ...openItem };
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
            <div className="header flex h-10 items-center justify-center bg-blue-500 p-1 text-base text-slate-900">
              <span>精选：</span>
              <span>{item.selection?.map((s, i) => (<span key={item.id + i} className={s == item.openNum ? ' bg-yellow-300' : ''}>{s}{i < item.selection.length - 1 ? '.' : ''}</span>))}</span>
            </div>
            <ul>
              {item.animals?.map((child, i) => (
                <li
                  key={item.id + i}
                  className="flex h-8 text-sm font-medium"
                  style={{ borderTop: '1px solid #ccc' }}
                >
                  <div
                    className="flex w-20 items-center justify-center"
                    style={{ backgroundColor: 'rgb(0, 204, 51)' }}
                  >
                    <span>{item.periods}</span>
                    <span>期</span>
                    <span>{child?.length}</span>
                    <span>肖</span>
                  </div>
                  <div className={'flex flex-1 items-center justify-center text-blue-600 '}>
                    {child.map((c, i) => (<span key={i + c} className={c.indexOf(item.openName) !== -1 ? ' bg-yellow-300' : ''}>{c}{i < child.length - 1 ? '.' : ''}</span>))}
                  </div>
                  <div
                    className="flex w-20 items-center justify-center"
                    style={{ backgroundColor: 'rgb(0, 204, 51)' }}
                  >
                    {(`${item.openNum} ${item.openName}`) || '??????'}
                  </div>
                </li>
              ))}
            </ul>
            <div className="footer flex h-10 items-center justify-center bg-cyan-300 p-1 text-base text-zinc-800">
              见证奇迹，成就梦想，彩霸王
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}
