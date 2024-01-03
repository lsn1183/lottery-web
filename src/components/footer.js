export default function Footer({ data }) {
  const { animalData } = data
  const redList = [],
    blueList = [],
    greenList = [],
    singleList = [],
    doubleList = [];

  animalData?.forEach((item) => {
    if (item.color == 'red') {
      redList.push(item);
    }
    if (item.color == 'green') {
      greenList.push(item);
    }
    if (item.color == 'blue') {
      blueList.push(item);
    }
    if (item.nums % 2 !== 0) {
      singleList.push(item);
    }
    if (item.nums % 2 === 0) {
      doubleList.push(item);
    }
  });

  const colorList = [
    {
      colorName: '红波',
      color: 'red',
      nums: redList.sort((a, b) => a.nums - b.nums),
    },
    {
      colorName: '蓝波',
      color: 'blue',
      nums: blueList.sort((a, b) => a.nums - b.nums),
    },
    {
      colorName: '绿波',
      color: 'green',
      nums: greenList.sort((a, b) => a.nums - b.nums),
    },
  ];

  // console.log(colorList, 'color', redList);
  const numsList = [
    {
      numName: '单数',
      nums: singleList.sort((a, b) => a.nums - b.nums),
    },
    {
      numName: '双数',
      nums: doubleList.sort((a, b) => a.nums - b.nums),
    },
  ];
  // console.log('singleList', singleList);
  return (
    <div className="w-full pb-4 text-lg font-medium font-mono">
      {/* 波色 */}
      <div className="bg-img flex h-14 w-full items-center justify-center border-lime-300  text-2xl"
        style={{
          backgroundImage: 'url(/images/roll/roll-bg2.jpeg)',
          color: 'rgb(255, 255, 0)',
        }}
      >
        <p>波色</p>
      </div>
      <ul className="flex flex-col">
        {colorList?.map((item) => (
          <li
            key={item.color}
            className="flex items-center pb-2 pt-2"
            style={{ borderBottom: '1px solid #ccc' }}
          >
            <div
              className="flex w-10 items-center justify-center"
              style={{ borderRight: '1px solid #ccc' }}
            >
              {item.colorName}
            </div>
            <div className="flex w-full flex-1 flex-wrap items-center justify-start gap-1 pl-2">
              {item.nums?.map((col) => (
                <div key={col.nums} className={`flex items-center justify-center rounded-full text-white w-8 h-8`}
                  style={{ backgroundColor: item.color, padding: '2px' }}
                >
                  {col.nums}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {/* 单双 */}
      <div
        className="bg-img flex h-14 w-full items-center justify-center border-lime-300  text-2xl"
        style={{
          backgroundImage: 'url(/images/roll/roll-bg2.jpeg)',
          color: '#bc0bd2',
        }}
      >
        <p>合单双</p>
      </div>
      <ul className="flex flex-col">
        {numsList?.map((item) => (
          <li
            key={item.numName}
            className="flex items-center pb-2 pt-2"
            style={{ borderBottom: '1px solid #ccc' }}
          >
            <div
              className="flex w-10 items-center justify-center"
              style={{ borderRight: '1px solid #ccc' }}
            >
              {item.numName}
            </div>
            <div className="flex w-full flex-1 flex-wrap items-center justify-start gap-1 pl-2">
              {item.nums?.map((child) => (
                <div key={child.nums} className=" flex items-center justify-center rounded-full text-white w-8 h-8"
                  style={{ backgroundColor: child.color, padding: '2px' }}
                >
                  {child.nums}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
