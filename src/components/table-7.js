import { getOpenItem } from '@/utils/utils';

export default function Table6({ title, data }) {
  const { openHistoryData, fourZodiacData, animalData } = data
  let leng = 4
  let arr1 = [], arr2 = [], type1 = [], type2 = [], arr_1 = [], arr_2 = [], type3 = [], type4 = [], arr_3 = [], arr_4 = [];
  const list = fourZodiacData.map((item, index) => {
    const { single, double } = item
    const openItem = getOpenItem(openHistoryData, item)
    arr1 = JSON.parse(single)
    arr2 = JSON.parse(double)
    type1 = animalData.filter((item, index) => item.type?.includes('男肖'))
    type2 = animalData.filter((item, index) => item.type?.includes('女肖'))
    // type3 = animalData.filter((item, index) => item.type?.includes('家肖'))
    // type4 = animalData.filter((item, index) => item.type?.includes('野肖'))

    arr_1 = [...arr1, ...arr2].filter((name, index) => type1.some(item => item.name == name))
    arr_2 = [...arr1, ...arr2].filter((name, index) => type2.some(item => item.name == name))
    // arr_3 = [...arr1, ...arr2].filter((name, index) => type3.some(item => item.name == name))
    // arr_4 = [...arr1, ...arr2].filter((name, index) => type4.some(item => item.name == name))
    // console.log(type1, 'openItem', arr_1, arr_2);
    return { ...item, ...openItem, names1: arr_1.length > leng ? arr_1.splice(0, leng) : arr_1, names2: arr_2.length > leng ? arr_2.splice(0, leng) : arr2, names3: arr_3.length > leng ? arr_3.splice(0, leng) : arr_3, names4: arr_4.length > leng ? arr_4.splice(0, leng) : arr_4 }
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
        <p>{title}论坛：(绝杀男女肖)</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="flex items-center justify-evenly h-10 text-base font-medium pl-5 pr-5" style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="w-20">{item.periods} 期：</div>
            <div>
              <div className='text-sm'>
                <span className='text-pink-700'>【男肖】</span>
                <span>【 {item.names1.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300 pl-1 pr-1' : 'pl-1 pr-1'}>{name}</span>))} 】</span>
              </div>
              <div className='text-sm'>
                <span className='text-lime-600'>【女肖】</span>
                <span>【 {item.names2.map((name, index) => (<span key={index + name} className={name == item.openName ? 'bg-yellow-300 pl-1 pr-1' : 'pl-1 pr-1'}>{name}</span>))} 】</span>
              </div>
            </div>
            <div className='w-20 ml-2 text-pink-400'>开：
              <span>{item.openNum}</span>
              <span className='text-sm font-bold text-amber-500'>({item.openName})</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
