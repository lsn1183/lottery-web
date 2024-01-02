import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';

export default function Table2({ data, title }) {
  const { multiZodiacData, animalData, openHistoryData } = data;
  // console.log('multiZodiacData', multiZodiacData);
  let newItem, selection, arr, animals, openItem;
  const list = multiZodiacData?.map((item, i) => {
    newItem = {};
    let { nine, id, periods } = item // 9肖
    periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods
    arr = JSON.parse(nine);
    openItem = getOpenItem(openHistoryData, item);
    animals = arr.map((name, index) => {
      return arr.slice(0, index + 1);
    });
    // console.log('openItem', selection);
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
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300 text-3xl text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll/roll-bg2.jpeg)' }}
      >
        <p>{title}论坛(必中九肖)</p>
      </div>
      <div>
        {list.map((item, index) => (
          <div key={item.id} className='font-bold'>
            <div className="header flex h-12 items-center justify-start bg-[#1fa412] p-1 pl-28 text-white">
              <Image
                width={30}
                height={20}
                alt="img"
                src='/images/icons/newArrow.jpeg'
              />
              <Image
                width={30}
                height={20}
                alt="img"
                src='/images/icons/newArrow.jpeg'
              />
              <Image
                width={30}
                height={20}
                alt="img"
                src='/images/icons/newArrow.jpeg'
              />
              <span>精选</span>
              <span>{item.selection?.map((s, i) => (<span key={item.id + i} className={s == item.openNum ? ' bg-yellow-300' : ''}>{s}{i < item.selection.length - 1 ? '.' : ''}</span>))}</span>
            </div>
            <ul>
              {item.animals?.map((child, i) => (
                <li
                  key={item.id + i}
                  className="flex h-10 text-xl font-medium"
                  style={{ borderTop: '1px solid #ccc' }}
                >
                  <div
                    className="flex w-24 items-center justify-center font-serif"
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
