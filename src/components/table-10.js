import { getOpenItem } from '@/utils/utils';

export default function Table6({ title, data }) {
  const { openData, fauvistData } = data
  // console.log(fauvistData, '----fauvistData');
  let arr1 = [], arr2 = [];
  const list = fauvistData.map((item, index) => {
    const { propitious, fierce } = item
    const openItem = getOpenItem(openData, item)
    arr1 = JSON.parse(propitious) // 吉
    arr2 = JSON.parse(fierce) // 凶
    return { ...item, ...openItem, names3: arr1, names4: arr2 }
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
        className="bg-img flex h-10 w-full items-center justify-center border-lime-300 "
        style={{
          backgroundImage: 'url(/images/roll-bg2.jpeg)',
          color: '#FFFF00',
        }}
      >
        <p>{title}论坛：天地三肖</p>
      </div>
      <div className='bg-red-700 text-yellow-400 text-base h-8 flex items-center justify-center' style={{ borderBottom: '2px solid #ccc' }}>
        <span>天肖：</span>
        <span></span>
      </div>
      <div className='bg-red-700 text-yellow-400 text-base h-8 flex items-center justify-center'>
        <span>地肖：</span>
        <span></span>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex items-center justify-evenly h-10 text-base font-medium pl-5 pr-5" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="w-20">{item.periods} 期：</div>
            <div>
              <div className='text-sm'>
                <span className='text-emerald-600'>【吉肖】</span>
                <span>【 {item.names3.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-400 pl-1 pr-1' : 'pl-1 pr-1'}>{name}</span>))} 】</span>
              </div>
              <div className='text-sm'>
                <span className='text-amber-600'>【凶肖】</span>
                <span>【 {item.names4.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-400 pl-1 pr-1' : 'pl-1 pr-1'}>{name}</span>))} 】</span>
              </div>
            </div>
            <div className='w-20 ml-2 text-pink-500'>开：
              <span className=''>{item.openNum}</span>
              <span className='text-sm font-bold text-amber-600'>({item.openName})</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
