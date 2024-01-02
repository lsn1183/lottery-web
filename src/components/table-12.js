import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';

export default function Table12({ title, data }) {
  const { openHistoryData, zodiacData } = data
  // console.log(multiZodiacData, '----multiZodiacData');
  const list = zodiacData.map((item, index) => {
    let { periods } = item // ：平特①肖中
    const openItem = getOpenItem(openHistoryData, item)
    periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods
    return { ...item, ...openItem, periods }
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
        <p>{title}：平特①肖中</p>
      </div>
      <ul>
        {list.map((item, i) => (
          <li key={item.id} className="flex items-center justify-around h-10 font-bold font-mono" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="pl-2 w-32">{item.periods}期：</div>
            <div className='flex-1'>
              【 <span>{item.single}</span> 】
            </div>
            <div className='flex-1 flex pr-8'>开：
              <span className=''>{item.openNum || '????'}</span>
              {
                item.openName &&
                <span className=''>({item.openName})</span>
              }
              {
                i > 0 ? <Image
                  width={30}
                  height={30}
                  alt="img"
                  src={item.ordinaryNames?.includes(item.single) ? '/images/icons/success.png' : '/images/icons/err.png'}
                /> : <Image
                  width={30}
                  height={30}
                  alt="img"
                  src={'/images/icons/new.gif'}
                />
              }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
