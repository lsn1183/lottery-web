import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';

export default function Table6({ title, data }) {
  const { openHistoryData, multiZodiacData } = data
  // console.log(fauvistData, '----fauvistData');
  let arr1 = [], arr2 = [];
  const list = multiZodiacData.map((item, index) => {
    let { six, periods } = item
    const openItem = getOpenItem(openHistoryData, item)
    periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods

    return { ...item, ...openItem, names1: JSON.parse(six), periods }
  })
  // console.log('data', list);
  return (
    <div className="w-full font-medium">
      <div
        className="bg-img flex h-14 w-full items-center justify-center "
        style={{ backgroundImage: 'url(/images/roll/roll-bg4.gif)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center "
        style={{ backgroundImage: 'url(/images/roll/roll-234.jpeg)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center "
        style={{
          backgroundImage: 'url(/images/roll/roll-bg2.jpeg)',
        }}
      >
        <Image
          width={40}
          height={22}
          alt="img"
          src='/images/icons/newArrow.jpeg'
        />
        <p>必中6肖</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex items-center justify-around h-12 text-xl font-bold" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="">{item.periods}期</div>
            <div className=''>
              {
                i == 0 && <div className='flex'>
                  <Image
                    width={20}
                    height={20}
                    alt="img"
                    src='/images/icons/hot.jpeg'
                  />
                  <Image
                    width={20}
                    height={20}
                    alt="img"
                    src='/images/icons/hot.jpeg'
                  />
                  <Image
                    width={20}
                    height={20}
                    alt="img"
                    src='/images/icons/hot.jpeg'
                  />
                </div>
              }
              <span>【{item.names1.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300 ' : ''}>{name}</span>))} 】</span>
            </div>
            <div className='flex w-24'>开
              <span className='pl-2'>{item.openNum || '????'}</span>
              {item.openName && <span className=''>{item.openName}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
