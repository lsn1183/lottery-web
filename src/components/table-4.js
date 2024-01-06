import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';

export default function Table10({ title, data }) {
  const { openHistoryData, multiZodiacData } = data
  // console.log(multiZodiacData, '----multiZodiacData');
  const list = multiZodiacData.map((item, index) => {
    let { four, periods } = item // 8肖
    const openItem = getOpenItem(openHistoryData, item)
    periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods
    return { ...item, ...openItem, names: JSON.parse(four), periods }
  })
  // console.log('data', list);
  return (
    <div className="w-full">
      <div
        className="bg-img flex h-10 w-full items-center justify-center border-lime-300 text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll/roll-bg4.gif)' }}
      ></div>
      <div
        className="bg-img flex h-10 w-full items-center justify-center border-lime-300  text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll/roll-bg5.gif)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300 text-2xl font-bold"
        style={{
          backgroundImage: 'url(/images/roll/roll-bg2.jpeg)',
          color: '#FFFF00',
        }}
      >
        <p>單車變寶馬：神奇四肖</p>
      </div>
      <ul className="w-full">
        {list.map((item, i) => (
          <li key={item.id} className="flex items-center justify-around h-10 font-bold" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="pl-2">{item.periods} 期：</div>
            <div className='flex'>
              <Image
                width={40}
                height={20}
                alt="img"
                src={'/images/icons/hot.jpeg'}
              />
              【 {item.names.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-400' : ''}>{name}</span>))} 】
            </div>
            <div className='w-32'>开：
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
