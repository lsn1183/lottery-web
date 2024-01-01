import { getOpenItem } from '@/utils/utils';

export default function Table4({ title, data }) {
  const { openHistoryData, multiZodiacData } = data
  // console.log(data, '----');
  const list = multiZodiacData.map(item => {
    const { single, double, main } = item
    const openItem = getOpenItem(openHistoryData, item)
    return { ...item, main, ...openItem }
  })
  // console.log('data', list);
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
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300  text-2xl font-medium"
        style={{
          backgroundImage: 'url(/images/roll-bg2.jpeg)',
        }}
      >
        <p>{title}：暴富单双</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex font-medium h-10 justify-around items-center text-2xl" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className='w-20 text-center'>{item.periods} 期</div>
            {
              item.main == '单' && <div className=''>
                <span className={item.openNum && Number(item.openNum) % 2 !== 0 ? ' bg-yellow-200' : ''}>单数</span>
                {/* <span>【 {item.single.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300' : ''}>{name}</span>))} 】</span> */}
              </div>
            }
            {
              item.main == '双' &&
              <div className=''>
                <span className={item.openNum && Number(item.openNum) % 2 == 0 ? ' bg-yellow-200' : ''}>双数</span>
                {/* <span>【 {item.double.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300' : ''}>{name}</span>))} 】</span> */}
              </div>
            }
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
