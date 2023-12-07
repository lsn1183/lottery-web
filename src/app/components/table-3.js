import { getOpenItem } from '@/utils/utils';

export default function Table3({ title, data = [], openData = [] }) {
  const colorList = [
    { color: 'blue', name: '蓝' },
    { color: 'green', name: '绿' },
    { color: 'red', name: '红' },
  ];
  // console.log('================================', title, data);
  let color1_Name = '',
    color2_Name = '',
    openItem,
    numArray = [];
  const list = data.map((item) => {
    color1_Name = colorList.filter((c) => c.color == item.color1)[0]['name'];
    color2_Name = colorList.filter((c) => c.color == item.color2)[0]['name'];
    openItem = getOpenItem(openData, item);
    numArray = item.nums.split('.');
    return {
      ...item,
      main: JSON.parse(item.main).join(''),
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
      <div className="">
        {list.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-around font-bold"
            style={{
              height: '175px',
              borderBottom: '1px solid #ccc',
              fontSize: '15pt',
            }}
          >
            <div className="" style={{ color: '#CC0033' }}>
              <span>{item.periods}期</span>:<span className="pl-1">①波</span>
              <span>①头主10码</span>:
              <span className="pl-2">
                开({item.openNum} {item.openName})
              </span>
            </div>
            <div>
              <span style={{ color: '#0033CC' }}>①波</span>〖{item.color1_Name}
              波+{item.color2_Name}波〗
              <span style={{ color: '#0033CC' }}>①头</span>〖{item.main}头〗
            </div>
            <div>
              <span style={{ color: '#0033CC' }}>主10码</span>
              <span>: </span>
              {item.nums?.map((n, _i) => (
                <span
                  className={
                    item.openNum == n ? ' rounded-md bg-yellow-300' : ''
                  }
                >
                  {n}
                  {_i + 1 < item.nums?.length ? '.' : ''}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
