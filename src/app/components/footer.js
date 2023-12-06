

export default async function Footer({ periodCount, animalData }) {

  const redList = [], blueList = [], greenList = [], singleList = [], doubleList = [];
  
  animalData.forEach(item => {
    if (item.color == 'red') {
      redList.push(item)
    }
    if (item.color == 'green') {
      greenList.push(item)
    }
    if (item.color == 'blue') {
      blueList.push(item)
    }
    if (item.nums % 2 !== 0) {
      singleList.push(item)
    }
    if (item.nums % 2 === 0) {
      doubleList.push(item)
    }
  })

  const colorList = [
    {
      colorName: "红波",
      color: "red",
      nums: redList.sort((a, b) => a.nums - b.nums),
    },
    {
      colorName: "蓝波",
      color: "blue",
      nums: blueList.sort((a, b) => a.nums - b.nums),

    },
    {
      colorName: "绿波",
      color: "green",
      nums: greenList.sort((a, b) => a.nums - b.nums),
    },
  ];

  // console.log(colorList, 'color', redList);
  const numsList = [
    {
      numName: "单数",
      nums: singleList.sort((a, b) => a.nums - b.nums),
    },
    {
      numName: "双数",
      nums: doubleList.sort((a, b) => a.nums - b.nums),
    },
  ];
// console.log('singleList', singleList);
  return (
    <div className="w-full text-xs pb-4">
      {/* 波色 */}
      <div className="w-full h-14 flex justify-center items-center text-2xl border-lime-300  bg-img"
        style={{
          backgroundImage: "url(/images/roll-bg2.jpeg)",
          color: "rgb(255, 255, 0)",
        }}
      >
        <p>波色</p>
      </div>
      <ul className="flex flex-col">
        {colorList?.map((item) => (
          <li key={item.id} className="flex items-center pt-2 pb-2" style={{ borderBottom: "1px solid #ccc" }} >
            <div className="w-10 flex items-center justify-center" style={{ borderRight: "1px solid #ccc" }} >
              {item.colorName}
            </div>
            <div className="w-full flex-1 flex items-center justify-start flex-wrap gap-1 pl-2">
              {item.nums?.map((col) => (
                <div className={`text-white flex justify-center items-center rounded`} style={{ backgroundColor: item.color,  padding: "2px"}}>
                  {col.nums}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {/* 单双 */}
      <div className="w-full h-14 flex justify-center items-center text-2xl border-lime-300  bg-img"
        style={{ backgroundImage: "url(/images/roll-bg2.jpeg)", color: "#bc0bd2"}}
      >
        <p>合数单双</p>
      </div>
      <ul className="flex flex-col">
        {numsList?.map((item) => (
          <li key={item.id} className="flex items-center pt-2 pb-2" style={{ borderBottom: "1px solid #ccc" }}>
            <div className="w-10 flex items-center justify-center" style={{ borderRight: "1px solid #ccc" }} >
              {item.numName}
            </div>
            <div className="w-full flex-1 flex items-center justify-start flex-wrap gap-1 pl-2">
              {item.nums?.map((child) => (
                <div className=" text-white flex justify-center items-center rounded" style={{ backgroundColor: child.color, padding: "2px"}}>
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
