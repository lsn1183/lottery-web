import { getOpenItem } from '@/utils/utils';

export default function Table12({ title, data }) {
  const { openHistoryData, zodiacData } = data
  // console.log(multiZodiacData, '----multiZodiacData');
  const list = zodiacData.map((item, index) => {
    // const { single } = item // ：平特①肖中
    const openItem = getOpenItem(openHistoryData, item)
    return { ...item, ...openItem }
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
        <p>{title}：平特①肖中</p>
      </div>
      <ul>
        {list.map((item, i) => (
          <li key={item.id} className="flex items-center justify-around h-10 font-bold font-mono" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="pl-2">{item.periods} 期：</div>
            <div className=''>
              【 <span className={item.single == item.openName ? 'bg-yellow-400' : ''}>{item.single}</span> 】
            </div>
            <div className='w-32 flex'>开：
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
