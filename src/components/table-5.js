import { getOpenItem } from '@/utils/utils';

export default function Table5({ title, data }) {
  const { openHistoryData, multiZodiacData } = data
  // console.log(data, '----');
  let name1, name2, names;
  const list = multiZodiacData.map((item, index) => {
    const { single, double } = item
    const openItem = getOpenItem(openHistoryData, item)
    if (index % 2 === 0) {
      name1 = JSON.parse(single).slice(0, 3)
      name2 = JSON.parse(double).slice(2, 4)
    } else {
      name1 = JSON.parse(single).slice(2, 4)
      name2 = JSON.parse(double).slice(0, 3)
    }
    names = [...name1, ...name2]
    return { ...item, ...openItem, names, }
  })

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
        <p>{title}(内部论坛：精准五肖中特)</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex text-2xl font-medium h-10 items-center justify-around" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className='w-20 text-center'>{item.periods} 期</div>
            <div className=''>
              <span>【 {item.names.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300' : ''}>{name}</span>))} 】</span>
            </div>
            <div className='w-28'>开：
              <span className=''>{item.openNum || '????'}</span>
              <span className=''>{item.openName}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
