import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';

export default function Table8({ title, data }) {
  const { openHistoryData, multiZodiacData } = data
  // console.log(multiZodiacData, '----multiZodiacData');
  const list = multiZodiacData.map((item, index) => {
    let { eight, periods } = item // 8肖
    const openItem = getOpenItem(openHistoryData, item)
    periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods
    return { ...item, ...openItem, names: JSON.parse(eight), periods }
  })
  // console.log('data', list);
  return (
    <div className="w-full">
      <div
        className="bg-img flex h-14 w-full items-center justify-center "
        style={{ backgroundImage: 'url(/images/roll/roll-bg4.gif)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center "
        style={{ backgroundImage: 'url(/images/roll/roll-234.jpeg)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center"
        style={{
          backgroundImage: 'url(/images/roll/roll-bg2.jpeg)',
          color: '#FFFF00',
        }}
      >
        <Image
          width={60}
          height={60}
          alt="img"
          src={'/images/icons/奇奇准.gif'}
        />
        <p>火爆八肖</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex items-center h-12 text-xl font-bold justify-around" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="text-2xl">{item.periods}期:</div>
            <div className='flex'>
              <Image
                width={40}
                height={20}
                alt="img"
                src={'/images/icons/箭头.jpeg'}
              />
              <span>{item.names.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-400' : ''}>{name}</span>))}</span>
            </div>

            <div className='w-24 flex'>开:
              <span className='ml-2'>{item.openNum || '????'}</span>
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
