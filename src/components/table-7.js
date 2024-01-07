

import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';

export default function Table7({ title, data }) {
  const { openHistoryData, multiZodiacData } = data
  // console.log(data, '----');
  const list = multiZodiacData.map((item, index) => {
    let { three, periods } = item
    const openItem = getOpenItem(openHistoryData, item)
    periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods
    return { ...item, ...openItem, names: JSON.parse(three), periods }
  })
  // console.log('data', list);
  return (
    <div className="w-full font-medium">
      <div
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300 text-2xl text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll/roll-bg4.gif)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300 text-2xl text-yellow-300"
        style={{ backgroundImage: 'url(/images/roll/roll-bg5.gif)' }}
      ></div>
      <div className="bg-img flex h-14 w-full items-center justify-center text-lime-300  text-2xl bg-red-600 ">
        {/* <Image
          width={60}
          height={60}
          alt="img"
          src={'/images/icons/爆.gif'}
        /> */}
        <Image
          width={60}
          height={60}
          alt="img"
          src={'/images/icons/奇奇准.gif'}
        />
        <p>内部绝密资料：绝杀三肖</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex text-xl font-bold h-10 items-center justify-around " style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="">{item.periods}期</div>
            <div className=''>
              <span className='text-lime-700'>【杀三肖】</span>
              <span>【 {item.names.map((name, index) => (<span key={index + name}>{name}</span>))} 】</span>
            </div>
            <div className='pr-2 flex w-28'>开:
              <span className=''>{item.openNum || '????'}</span>
              <span className=''>{item.openName}</span>
              {
                i > 0 && <Image
                  width={30}
                  height={30}
                  alt="img"
                  src={!item.names?.includes(item.openName) ? '/images/icons/success.png' : '/images/icons/err.png'}
                />
              }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
