import { getOpenItem } from '@/utils/utils';

export default function Table4({ title, data }) {
  const { openHistoryData, fourZodiacData } = data
  // console.log(data, '----');
  const list = fourZodiacData.map(item => {
    const { single, double } = item
    const openItem = getOpenItem(openHistoryData, item)
    return { ...item, single: JSON.parse(single), double: JSON.parse(double), ...openItem }
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
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300  text-2xl"
        style={{
          backgroundImage: 'url(/images/roll-bg2.jpeg)',
          color: '#FFFF00',
        }}
      >
        <p>{title}(内部论坛：单双四肖)</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex text-base font-medium h-10 justify-center items-center " style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className=" text-violet-700 ">{item.periods} 期：</div>
            <div className=' text-red-600'>
              <span className={Number(item.openNum) % 2 !== 0 ? 'text-fuchsia-600 bg-yellow-200' : 'text-fuchsia-600'}>单数</span>
              <span>【 {item.single.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300' : ''}>{name}</span>))} 】</span>
            </div>
            <div className=' text-red-600'>
              <span className={Number(item.openNum) % 2 == 0 ? 'text-purple-700 bg-yellow-200' : 'text-purple-700'}>双数</span>
              <span>【 {item.double.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300' : ''}>{name}</span>))} 】</span>

            </div>
            <div >开：
              <span className='pl-1 pr-1 text-pink-700'>{item.openNum}</span>
              <span className='text-sm font-bold'>{item.openName}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
