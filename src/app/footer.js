import dataSource from "@/utils/dataSource";
import { yieldNums } from "@/utils/utils";

export default function Table1() {
  const { blueNums, colors, greenNums, redNums } = dataSource;

  const numsArr = yieldNums(49);
  // 获取奇数
  const getUnevenNumber = () => {
    const nums = numsArr.filter((num) => num % 2 !== 0);
    return nums;
  };
  // 获取偶数
  const getEvenNumber = () => {
    const nums = numsArr.filter((num) => num % 2 === 0);
    return nums;
  };
  const colorList = [
    {
      colorName: "红波",
      colors: redNums,
    },
    {
      colorName: "蓝波",
      colors: blueNums,
    },
    {
      colorName: "绿波",
      colors: greenNums,
    },
  ];

  const numsList = [
    {
      numName: "单数",
      nums: getUnevenNumber(),
    },
    {
      numName: "双数",
      nums: getEvenNumber(),
    },
  ];

  const getColorNum = (num) => {

    if (redNums.includes(num)) {
      return 'red';
    }
    if (blueNums.includes(num)) {
      return 'blue';
    }
    if (greenNums.includes(num)) {
      return 'green';
    }

  }

  return (
    <div className="w-full">
      {/* 波色 */}
      <div
        className="w-full h-14 flex justify-center items-center text-2xl border-lime-300  bg-img"
        style={{
          backgroundImage: "url(/images/roll-bg2.jpeg)",
          color: "rgb(255, 255, 0)",
        }}
      >
        <p>波色</p>
      </div>
      <div className="">
        <ul>
          {colorList?.map((item) => (
            <li
              className="flex items-center h-10"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div
                className=" w-20 h-full flex items-center justify-center"
                style={{ borderRight: "1px solid #ccc" }}
              >
                {item.colorName}
              </div>
              <div className=" pl-8 pr-8 h-8 flex items-center justify-between">
                {item.colors?.map((col) => (
                  <div
                    className="ml-2 p-1 text-white h-5 flex justify-center items-center"
                    style={{
                      backgroundColor: colors.filter(
                        (c) => c.colorZname == item.colorName
                      )[0]?.colorName,
                    }}
                  >
                    {col}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* 单双 */}
      <div
        className="w-full h-14 flex justify-center items-center text-2xl border-lime-300  bg-img"
        style={{
          backgroundImage: "url(/images/roll-bg2.jpeg)",
          color: "#bc0bd2",
        }}
      >
        <p>合数单双</p>
      </div>
      <div className="">
        <ul>
          {numsList?.map((item) => (
            <li
              className="flex items-center h-10"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div
                className="w-10 h-full flex items-center justify-center"
                style={{ borderRight: "1px solid #ccc" }}
              >
                {item.numName}
              </div>
              <div className="pl-1 h-10 flex items-center justify-between">
                {item.nums?.map((child) => (
                  <div
                    className="ml-1 h-5 flex justify-center items-center text-white"
                    style={{
                      backgroundColor: getColorNum(child),
                      padding: '2px'
                    }}
                  >
                    {child}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
