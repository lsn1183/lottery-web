import { getAnimalList } from '@/api/query';
import moment from 'moment';
import { useEffect, useState } from 'react';

export async function getServerSideProps() {
  // Fetch data from external API
  const year = moment().year(); // 今年年份
  const result = await getAnimalList({ year });
  const data = {
    animalData: result?.data || [],
  };
  return { props: { data } }
}

function Attribute({ data }) {
  const [days, setDays] = useState(0);
  const { animalData } = data
  const redList = [],
    blueList = [],
    greenList = [],
    singleList = [],
    doubleList = [],
    animalList = [];
  let animals = {}
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
    if (!animals[item.name]) {
      let arr = []
      arr.push(item)
      animals[item.name] = arr
    } else {
      let arr = animals[item.name]
      arr.push(item)
    }
  });
  console.log('obj', animals);

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

  useEffect(() => { }, []);

  return (
    <div className='content overflow-scroll'>
      <div className="w-full pb-4 text-xs overflow-auto">
        {/* 波色 */}
        <div className="flex h-14 w-full items-center justify-center bg-green-400 text-xl"
          style={{
            backgroundImage: 'url(/images/roll-bg2.jpeg)',
            color: '#bc0bd2',
          }}
        >
          波色
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
                  <div key={col.nums} className={`flex items-center justify-center rounded text-white`}
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
            backgroundImage: 'url(/images/roll-bg2.jpeg)',
            color: '#bc0bd2',
          }}
        >
          <p>合数单双</p>
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
                  <div key={child.nums} className=" flex items-center justify-center rounded text-white"
                    style={{ backgroundColor: child.color, padding: '2px' }}
                  >
                    {child.nums}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* 生肖 */}
        <div
          className="bg-img flex h-14 w-full items-center justify-center border-lime-300  text-2xl"
          style={{
            backgroundImage: 'url(/images/roll-bg2.jpeg)',
            color: '#bc0bd2',
          }}
        >
          <p>生肖表</p>
        </div>
        <ul className="flex flex-col">
          {Object.keys(animals)?.map((key) => (
            <li
              key={key}
              className="flex items-center pb-2 pt-2"
              style={{ borderBottom: '1px solid #ccc' }}
            >
              <div
                className="flex w-10 items-center justify-center"
                style={{ borderRight: '1px solid #ccc' }}
              >
                {key}
              </div>
              <div className="flex w-full flex-1 flex-wrap items-center justify-start gap-1 pl-2">
                {animals[key].sort((a, b) => a.nums - b.nums)?.map((item) => (
                  <div key={item.nums} className=" flex items-center justify-center rounded text-white"
                    style={{ backgroundColor: item.color, padding: '2px' }}
                  >
                    <div>
                      <span className=' m-1'>{item.nums}，</span>
                      <span className=' m-1'>{item.property}，</span>
                      <span className=' m-1'>{item.profession}，</span>
                      <span className=' m-1'>{JSON.parse(item.type).join(',')}</span>
                    </div>

                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Attribute

