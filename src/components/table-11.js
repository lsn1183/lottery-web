import { getOpenItem } from '@/utils/utils';

export default function Table11({ title, data }) {
  const { openHistoryData, zodiacData } = data
  // console.log(multiZodiacData, '----multiZodiacData');
  const list = zodiacData.map((item, index) => {
    const { mantissa } = item // 论坛：金牌六尾
    const openItem = getOpenItem(openHistoryData, item)
    return { ...item, ...openItem, names: JSON.parse(mantissa) }
  })
  // console.log('data', list);
  return (
    <div className="w-full">
      <div
        className="bg-img flex h-10 w-full items-center justify-center border-lime-300 text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll-bg4.gif)' }}
      ></div>
      <div
        className="bg-img flex h-10 w-full items-center justify-center border-lime-300  text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll-bg5.gif)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300 text-2xl font-bold"
        style={{
          backgroundImage: 'url(/images/roll-bg2.jpeg)',
          color: '#FFFF00',
        }}
      >
        <p>{title}论坛：金牌六尾</p>
      </div>
      <ul>
        {list.map((item, i) => (
          <li key={item.id} className="flex items-center justify-around h-10 font-bold text-2xl" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="pl-2 ">{item.periods} 期：</div>
            <div className='font-mono'>
              【{item.names.map((name, index) => (<span key={index + item.id} className={name == item.openName ? 'bg-yellow-400' : ''}>{name}{index < 5 ? ',' : ''}</span>))}】
            </div>
            <div className='w-28 text-xl'>开：
              <span className=''>{item.openNum || '????'}</span>
              {
                item.openName &&
                <span className=''>({item.openName})</span>
              }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
