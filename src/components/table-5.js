import { getOpenItem } from '@/utils/utils';

export default function Table5({ title, data }) {
  const { openData, fourZodiacData } = data
  // console.log(data, '----');
  let name1, name2;
  const list = fourZodiacData.map((item, index) => {
    const { single, double } = item
    const openItem = getOpenItem(openData, item)
    if (index % 2 === 0) {
      name1 = JSON.parse(single).slice(0, 2)
      name2 = JSON.parse(double).slice(0, 3)
    } else {
      name1 = JSON.parse(single).slice(0, 3)
      name2 = JSON.parse(double).slice(0, 2)
    }
    return { ...item, ...openItem, names: [...name1, ...name2], }
  })

  console.log('data', list);

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
        <p>{title}(内部论坛：五肖中特)</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex text-base font-medium h-10 justify-center items-center " style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className=" ">{item.periods} 期：</div>
            <div className=' '>
              <span className='text-blue-700'>精准五肖中特</span>
              <span>【 {item.names.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300' : ''}>{name}</span>))} 】</span>
            </div>

            <div className='text-pink-400'>开：
              <span className='pl-1 pr-1'>{item.openNum}</span>
              <span className='text-sm font-bold text-amber-500'>({item.openName})</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
