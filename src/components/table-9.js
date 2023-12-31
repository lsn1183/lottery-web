import { getOpenItem } from '@/utils/utils';

export default function Table9({ title, data }) {
  const { openHistoryData, fauvistData } = data
  // console.log(fauvistData, '----fauvistData');
  let arr1 = [], arr2 = [];
  const list = fauvistData.map((item, index) => {
    const { beast, birds, main } = item
    const openItem = getOpenItem(openHistoryData, item)
    arr1 = JSON.parse(beast) // 野
    arr2 = JSON.parse(birds) // 家
    return { ...item, ...openItem, names3: arr1, names4: arr2, names: main }
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
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300  text-2xl font-bold"
        style={{
          backgroundImage: 'url(/images/roll-bg2.jpeg)',
          color: '#FFFF00',
        }}
      >
        <p>{title}论坛：(绝杀家禽野兽)</p>
      </div>
      <ul className='w-full'>
        {list.map((item, i) => (
          <li key={item.id} className="h-10 flex items-center justify-around font-bold text-2xl gap-4 " style={{
            borderBottom: '1px solid #ccc',
          }}>
            <div className="w-30">{item.periods} 期：</div>
            {
              item.names == '野肖' && <div className=''>
                【
                <span className={item.names3.some(name => name == item.openName) ? 'bg-yellow-400' : ''}>野兽</span>
                】
              </div>
            }

            {
              item.names == '家肖' && <div className=''>
                【
                <span className={item.names3.some(name => name == item.openName) ? 'bg-yellow-400' : ''}>家畜</span>
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