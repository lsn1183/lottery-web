import { getOpenItem } from '@/utils/utils';

export default function Table10_1({ data, title }) {
  const { multiZodiacData, openHistoryData } = data;
  // console.log('multiZodiacData', multiZodiacData);
  let newItem, arr, animals, openItem;
  const list = multiZodiacData.filter((el,i)=> i < 1)?.map((item, i) => {
    newItem = {};
    let { ten, id, periods } = item // 9肖
    periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods
    arr = JSON.parse(ten);
    openItem = getOpenItem(openHistoryData, item);
    animals = arr.map((name, index) => {
      return arr.slice(0, index + 1);
    });
    newItem = { id, periods, animals, ...openItem };
    return newItem;
  });
  // console.log(list, '11111-Table2');
  return (
    <div className="w-full">
      <div
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300 text-2xl text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll/roll-bg4.gif)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300 text-2xl text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll/roll-bg5.gif)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300 text-3xl text-red-500"
        // style={{ backgroundImage: 'url(/images/roll/roll-bg2.jpeg)' }}
      >
        <p>论坛内部爆料：精准十肖</p>
      </div>
      <div>
        {list.map((item, index) => (
          <div key={item.id} className='font-bold'>
            {/* <div className="header flex h-12 items-center justify-start bg-[#1fa412] p-1 pl-28 text-white">
            </div> */}
            <ul>
              {item.animals?.map((child, i) => (
                <li
                  key={item.id + i}
                  className="flex h-10 text-xl font-medium"
                  style={{ borderTop: '1px solid #ccc' }}
                >
                  <div
                    className="flex w-24 items-center justify-center"
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
                    className="flex w-16 items-center justify-center font-serif"
                    style={{ backgroundColor: 'rgb(0, 204, 51)' }}
                  >
                    {item.openNum ? (`${item.openNum} ${item.openName}`) : '????'}
                  </div>
                </li>
              ))}
            </ul>
            <div className="footer flex h-10 items-center justify-center bg-[#527A00] p-1 text-white bg-mg" >
              见证奇迹，成就梦想，彩霸王
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}
