import { getOpenItem } from '@/utils/utils';

export default function Table5({ title, data }) {
  const { openHistoryData, multiZodiacData } = data
  // console.log(data, '----');
  let name1, name2, names;
  const list = multiZodiacData.map((item, index) => {
    let { five, periods } = item
    const openItem = getOpenItem(openHistoryData, item)
    periods = periods < 10 ? '00' + periods : periods < 100 ? '0' + periods : periods
    names = JSON.parse(five)
    return { ...item, ...openItem, names, periods }
  })

  return (
    <div className="w-full">
      <div
        className="bg-img flex h-14 w-full items-center justify-center"
        style={{ backgroundImage: 'url(/images/roll-bg4.gif)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center "
        style={{ backgroundImage: 'url(/images/2123.gif)' }}
      ></div>
      <div
        className="bg-img flex h-14 w-full items-center justify-center"
        style={{
          backgroundImage: 'url(/images/roll-bg2.jpeg)',
          color: '#FFFF00',
        }}
      >
        <p>{title}(内部论坛：精准五肖中特)</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex text-2xl font-medium h-10 items-center justify-around" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className='w-22 font-mono'>{item.periods} 期</div>
            <div className=''>
              <span>【 {item.names.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300' : ''}>{name}</span>))} 】</span>
            </div>
            <div className='w-28'>开：
              <span className=''>{item.openNum || '????'}</span>
              <span className=''>{item.openName}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
