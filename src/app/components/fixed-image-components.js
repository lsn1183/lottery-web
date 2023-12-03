import dataSource from "@/utils/dataSource";
import Image from "next/image";
const list = dataSource.amimalList

async function createAnimal(animal) {
  const res = await fetch("http://localhost:3001/open/update", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(animal),
  });
  const data = await res.json();
  return data;
}

const filterNums = (key) => {
  let data = list.filter((item) => item.nums == key);
  return data.length > 0 ? data[0]["name"] + "/" + data[0]["property"] : null;
};

const getRandom = () => {
  let num = Math.floor(Math.random() * 49) + 1;
  num = num < 10 ? "0" + num : num;
  return num;
};

const create = () => {
  let newArr = [];
  for (let index = 0; index < 297; index++) {
    const obj = {
      periods: "",
      particular: "",
      ordinary1: "",
      ordinary2: "",
      ordinary3: "",
      ordinary4: "",
      ordinary5: "",
      ordinary6: "",
    };
    obj.periods = index + 1;
    obj.particular = getRandom(); // 特码
    obj.particular_property = filterNums(obj.particular);
    obj.particular_color = list.filter(
      (item) => item.nums == obj.particular
    )[0]["color"];

    obj.ordinary1 = getRandom();
    obj.ordinary1_property = filterNums(obj.ordinary1);
    obj.ordinary1_color = list.filter((item) => item.nums == obj.ordinary1)[0][
      "color"
    ];

    obj.ordinary2 = getRandom();
    obj.ordinary2_property = filterNums(obj.ordinary2);
    obj.ordinary2_color = list.filter((item) => item.nums == obj.ordinary2)[0][
      "color"
    ];

    obj.ordinary3 = getRandom();
    obj.ordinary3_property = filterNums(obj.ordinary3);
    obj.ordinary3_color = list.filter((item) => item.nums == obj.ordinary3)[0][
      "color"
    ];

    obj.ordinary4 = getRandom();
    obj.ordinary4_property = filterNums(obj.ordinary4);
    obj.ordinary4_color = list.filter((item) => item.nums == obj.ordinary4)[0][
      "color"
    ];

    obj.ordinary5 = getRandom();
    obj.ordinary5_property = filterNums(obj.ordinary5);
    obj.ordinary5_color = list.filter((item) => item.nums == obj.ordinary5)[0][
      "color"
    ];

    obj.ordinary6 = getRandom();
    obj.ordinary6_property = filterNums(obj.ordinary6);
    obj.ordinary6_color = list.filter((item) => item.nums == obj.ordinary6)[0][
      "color"
    ];

    newArr.push(obj);
  }
  // console.log(JSON.stringify(newArr), "--arr");
  return newArr;
};

const inertData = async (data) => {
  const database = create();
  let data1 = database.slice(0, 150);
  let data2 = database.slice(151, 317);
  // console.log(data1, "------", data2);
  const res = await createAnimal(data1);
  const res2 = await createAnimal(data2);
}
// inertData()  // 往open数据库插入历史开奖数据

// 插图集合
export default function Header() {

  return (
    <div className="header">
      <Image
        src="/images/8787.gif"
        alt="Vercel Logo"
        priority
        quality={100}
        sizes="(max-width: 768px) 100vw, 33vw"
        width={100}
        height={100}
        style={{ objectFit: "contain", width: "100%", height: "auto" }}
      />
    </div>
  );
}
