import { API } from "../../utils/config";
import { getEvenNumber, getUnevenNumber } from "../../utils/utils";

async function getData() {
  const res = await fetch(API + "/animal/list");
  const users = await res.json();
  return users;
}

export default async function Footer() {
  const data = await getData();

  const colorList = [
    {
      colorName: "红波",
      color: "red",
      nums: data
        .filter((item) => item.color === "red")
        .map((item) => item.nums)
        .sort(),
    },
    {
      colorName: "蓝波",
      color: "blue",
      nums: data
        .filter((item) => item.color === "blue")
        .map((item) => item.nums)
        .sort(),
    },
    {
      colorName: "绿波",
      color: "green",
      nums: data
        .filter((item) => item.color === "green")
        .map((item) => item.nums)
        .sort(),
    },
  ];

  const numsList = [
    {
      numName: "单数",
      nums: getUnevenNumber(data).sort((a, b) => a.nums - b.nums),
    },
    {
      numName: "双数",
      nums: getEvenNumber(data).sort((a, b) => a.nums - b.nums),
    },
  ];

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
              key={item.id}
              className="flex items-center h-10"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div
                className="w-20 h-full flex items-center justify-center"
                style={{ borderRight: "1px solid #ccc" }}
              >
                {item.colorName}
              </div>
              <div className=" w-full pl-8 pr-8 h-8 flex items-center justify-start">
                {item.nums?.map((col) => (
                  <div
                    className="ml-2 p-1 text-white h-6 flex justify-center items-center rounded"
                    style={{
                      backgroundColor: item.color,
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
      <div className=" w-full">
        <ul>
          {numsList?.map((item) => (
            <li
              key={item.id + item.numName}
              className="flex items-center h-10 w-full"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div
                className="w-10 h-full flex items-center justify-center"
                style={{ borderRight: "1px solid #ccc" }}
              >
                {item.numName}
              </div>
              <div className="flex items-center justify-start h-10 flex-auto gap-1 pl-5">
                {item.nums?.map((child) => (
                  <div
                    className=" h-6 flex justify-center items-center text-white rounded"
                    style={{
                      backgroundColor: child.color,
                      padding: "2px",
                    }}
                  >
                    {child.nums}
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
