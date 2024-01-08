import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';

export default function Table12({ title, data }) {
  const { openHistoryData, zodiacData } = data
  console.log(zodiacData, '----zodiacData');
  const list = zodiacData.map((item, index) => {
    let { periods } = item // ：平特①肖中
    const openItem = getOpenItem(openHistoryData, item);
    openItem?.ordinaryNames.push(openItem.openName)
    console.log('openItem', openItem, openItem?.ordinaryNames?.some(v => v == item?.openName));
    periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods
    return { ...item, ...openItem, periods }
  })
  console.log('data', list);
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
          <li key={item.id} className="flex text-1xl items-center h-10 font-bold font-mono justify-around" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="w-24 text-center">{item.periods}期：</div>
            <div className='flex items-center justify-center'>
              平特①肖【{item.single}】
            </div>
            <div className='flex justify-center w-20'>
              <span>{item.openNum || '????'}</span>
              {
                item.openName &&
                <span>({item.openName})</span>
              }
              {
                i > 0 && <Image
                  width={30}
                  height={30}
                  alt="img"
                  // ordinaryNames 平码集合
                  src={item?.ordinaryNames?.some(v => v == item?.single) ? '/images/icons/success.png' : '/images/icons/err.png'}
                />
              }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
