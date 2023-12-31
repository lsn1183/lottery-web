import { getOpenItem } from '@/utils/utils';

export default function Table6({ title, data }) {
  const { openHistoryData, fauvistData } = data
  // console.log(fauvistData, '----fauvistData');
  // console.log(fauvistData, '----fauvistData');
  let arr1 = [], arr2 = [];
  const list = fauvistData.map((item, index) => {
    const { beast, birds } = item
    const openItem = getOpenItem(openHistoryData, item)
    arr1 = [...JSON.parse(beast), ...JSON.parse(birds)] // 野
    // arr2 = JSON.parse(birds) // 家
    return { ...item, ...openItem, names1: arr1.splice(0, 6) }
  })
  // console.log('data', list);
  return (
    <div className="w-full font-medium">
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
          color: '#7c04ff',
        }}
      >
        <p>{title}论坛：必中6肖</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex items-center justify-around h-12 text-xl font-bold" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="">{item.periods}期</div>
            <div className=''>
              <span>【{item.names1.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300 pl-1 pr-1' : 'pl-1 pr-1'}>{name}</span>))} 】</span>
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
