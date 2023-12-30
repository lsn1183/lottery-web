import { getOpenItem } from '@/utils/utils';

export default function Table3({ title, data }) {
  const { colourData, openHistoryData } = data
  const colorList = [
    { color: 'blue', name: '蓝' },
    { color: 'green', name: '绿' },
    { color: 'red', name: '红' },
  ];
  let color1_Name = '',
    color2_Name = '',
    color1,
    color2,
    openItem,
    numArray = [];
  const list = colourData.map((item) => {
    color1_Name = colorList.filter((c) => c.color == item.color1)[0]['name'];
    color1 = colorList.filter((c) => c.color == item.color1)[0]['color'];
    color2_Name = colorList.filter((c) => c.color == item.color2)[0]['name'];
    color2 = colorList.filter((c) => c.color == item.color2)[0]['color'];
    openItem = getOpenItem(openHistoryData, item);

    numArray = item.nums.split('.');
    return {
      ...item,
      main: JSON.parse(item.main),
      ...openItem,
      color2_Name,
      color1_Name,
      nums: numArray,
    };
  });

  return (
    <div className="w-full">
      <div
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300  text-base"
        style={{
          backgroundImage: 'url(/images/roll-bg2.jpeg)',
          color: 'rgb(255, 255, 0)',
        }}
      >
        <p>↓↓↓ 请大家记住新网址 ↓↓↓ www.111.com</p>
      </div>
      <ul className="text-xl">
        {list.map((item, index) => (
          <li
            key={item.id}
            className="flex h-32 flex-col items-center justify-around font-bold"
            style={{
              borderBottom: '1px solid #ccc',
            }}
          >
            <div className=" text-rose-600">
              <span>{item.periods}期</span>:<span className="pl-1 text-cyan-700">①波</span>
              <span>①头主10码</span>:
              <span className="pl-2 text-orange-600">
                开({item.openNum} {item.openName})
              </span>
            </div>
            <div>
              <span style={{ color: '#0033CC' }}>①波</span>〖<span className={item.color1 == item.openColor ? 'bg-yellow-300' : ''}>{item.color1_Name}</span>
              波+ <span className={item.color2 == item.openColor ? 'bg-yellow-300' : ''}>{item.color2_Name}</span> 波〗
              <span style={{ color: '#0033CC' }}>①头</span>〖{item.main.map((v, i) => (<span key={JSON.stringify(item.main) + i}
                className={JSON.stringify(Number(item.openNum))[0] == v ? 'bg-yellow-300' : ''}>{v}</span>))}头〗
            </div>
            <div>
              <span style={{ color: '#0033CC' }}>主10码</span>
              <span>: </span>
              {item.nums?.map((n, _i) => (
                <span
                  key={item.id + _i}
                  className={
                    item.openNum == n ? 'bg-yellow-300' : ''
                  }
                >
                  {n}
                  {_i + 1 < item.nums?.length ? '.' : ''}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
