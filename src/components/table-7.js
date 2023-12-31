

import { getOpenItem } from '@/utils/utils';

export default function Table7({ title, data }) {
  const { openHistoryData, multiZodiacData } = data
  // console.log(data, '----');
  let name1, name2, arr1, arr2;
  const list = multiZodiacData.map((item, index) => {
    const { single, double } = item
    const openItem = getOpenItem(openHistoryData, item)
    arr1 = JSON.parse(single)
    arr2 = JSON.parse(double)
    if (index % 2 === 0) {
      name1 = arr1.slice(arr1.length - 2, arr1.length - 1)
      name2 = arr2.slice(0, 2)
    } else {
      name1 = arr1.slice(arr1.length - 4, -1)
      name2 = arr2.slice(arr2.length - 2, 1)
    }
    return { ...item, ...openItem, names: [...name1, ...name2], }
  })
  // console.log('data', list);
  return (
    <div className="w-full font-medium">
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
          color: '#0017ff',
        }}
      >
        <p>{title}(天天中彩：绝杀三肖)</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex text-xl font-bold h-10 items-center justify-around " style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="">{item.periods}期</div>
            <div className=''>
              <span className='text-lime-700'>【绝杀三肖】</span>
              <span>【 {item.names.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300' : ''}>{name}</span>))} 】</span>
            </div>
            <div className='pr-2'>开:
              <span className=''>{item.openNum || '????'}</span>
              <span className=''>{item.openName}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
