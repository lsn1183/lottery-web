import { getOpenItem } from '@/utils/utils';
import Image from 'next/image';

export default function Table4({ title, data }) {
  const { openHistoryData, multiZodiacData } = data
  // console.log(data, '----');
  const list = multiZodiacData.map(item => {
    let { periods, main } = item
    const openItem = getOpenItem(openHistoryData, item)
    periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods
    return { ...item, main, ...openItem, periods }
  })
  // console.log('data', list);
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
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300  text-2xl font-medium"
        style={{
          backgroundImage: 'url(/images/roll/roll-bg2.jpeg)',
        }}
      >
        <p>{title}：单双(發發發)</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex font-medium h-10 justify-around items-center text-2xl" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className='w-20 text-center'>{item.periods} 期</div>

            <div className='flex items-center h-4'>
              {
                i > 0 &&
                <div ><Image
                  width={20}
                  height={20}
                  src={'/images/icons/icon-1.jpeg'}
                /></div>
              }
              {
                item.main == '单' && <div className='flex'>
                  <span className={item.openNum && Number(item.openNum) % 2 !== 0 ? ' bg-yellow-200' : ''}>【单】</span>
                  {/* <span>【 {item.single.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300' : ''}>{name}</span>))} 】</span> */}
                </div>
              }
              {
                item.main == '双' &&
                <div className='flex'>

                  <span className={item.openNum && Number(item.openNum) % 2 == 0 ? ' bg-yellow-200' : ''}>【双】</span>
                  {/* <span>【 {item.double.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300' : ''}>{name}</span>))} 】</span> */}
                </div>
              }
            </div>

            <div >开：
              <span className='pl-1 pr-1'>{item.openNum || '????'}</span>
              <span className=''>{item.openName}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
