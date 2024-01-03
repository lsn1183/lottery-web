import dataSource from '@/database/dataSource';
import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';

export default function Table9({ title, data }) {
  const { openHistoryData, fauvistData } = data
  // console.log(fauvistData, '----fauvistData', dataSource);
  let arr1 = [], arr2 = [];
  const list = fauvistData.map((item, index) => {
    let { beast, birds, main, periods } = item
    const openItem = getOpenItem(openHistoryData, item)
    // arr1 = JSON.parse(beast) // 野
    // arr2 = JSON.parse(birds) // 家
    arr1 = dataSource.typeList.filter(({ type }) => type == '野肖')[0]['names'] // 野
    arr2 = dataSource.typeList.filter(({ type }) => type == '家肖')[0]['names']  // 家

    periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods
    return { ...item, ...openItem, beast: arr1, birds: arr2, names: main, periods }
  })

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
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300  text-2xl font-bold"
        style={{
          backgroundImage: 'url(/images/roll/roll-bg2.jpeg)',
          color: '#FFFF00',
        }}
      >
        <p>管家特推：(绝杀家禽野兽)</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="h-10 flex items-center justify-around font-bold text-2xl gap-4" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="w-28 text-center">{item.periods} 期：</div>
            {
              item.names == '野肖' && <div className='flex flex-auto'>
                {
                  i > 0 ? <Image
                    width={30}
                    height={30}
                    alt="img"
                    src={item.beast?.includes(item.openName) ? '/images/icons/success.png' : '/images/icons/err.png'}
                  /> : <div ><Image
                    width={30}
                    height={30}
                    alt="img"
                    src={'/images/icons/new.gif'}
                  /></div>
                }
                【
                <span className={item.beast?.some(name => name == item.openName) ? 'bg-yellow-400' : ''}>野兽</span>
                】
              </div>
            }
            {
              item.names == '家肖' && <div className='flex flex-auto'>
                {
                  i > 0 ? <Image
                    width={30}
                    height={30}
                    alt="img"
                    src={item.birds?.includes(item.openName) ? '/images/icons/success.png' : '/images/icons/err.png'}
                  /> : <div ><Image
                    width={30}
                    height={30}
                    alt="img"
                    src={'/images/icons/new.gif'}
                  /></div>
                }
                【
                <span className={item.birds?.some(name => name == item.openName) ? 'bg-yellow-400' : ''}>家畜</span>
                】
              </div>
            }
            <div className='w-32'>开：
              <span className=''>{item.openNum || '????'}</span>
              {item.openName && <span>({item.openName})</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}