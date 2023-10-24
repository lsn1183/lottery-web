const list = [
  {
    nums: "18",
    color: "red",
    name: "狗",
    id: 1,
    property: "土",
    general: "土",
    profession: "文官",
  },
  {
    nums: "30",
    color: "red",
    name: "狗",
    id: 2,
    property: "火",
    general: "土",
    profession: "先锋",
  },
  {
    nums: "20",
    color: "blue",
    name: "猴",
    id: 3,
    property: "水",
    general: "金",
    profession: "寇王",
  },
  {
    nums: "42",
    color: "blue",
    name: "狗",
    id: 4,
    property: "水",
    general: "土",
    profession: "管家",
  },
  {
    nums: "32",
    color: "green",
    name: "猴",
    id: 5,
    property: "金",
    general: "金",
    profession: "游侠",
  },
  {
    nums: "11",
    color: "green",
    name: "蛇",
    id: 6,
    property: "水",
    general: "火",
    profession: "宫女",
  },
  {
    nums: "44",
    color: "green",
    name: "猴",
    id: 7,
    property: "木",
    general: "金",
    profession: "寇王",
  },
  {
    nums: "23",
    color: "red",
    name: "蛇",
    id: 8,
    property: "金",
    general: "火",
    profession: "才人",
  },
  {
    nums: "35",
    color: "red",
    name: "蛇",
    id: 9,
    property: "木",
    general: "火",
    profession: "美女",
  },
  {
    nums: "47",
    color: "blue",
    name: "蛇",
    id: 10,
    property: "土",
    general: "火",
    profession: "太子",
  },
  {
    nums: "13",
    color: "red",
    name: "兔",
    id: 11,
    property: "木",
    general: "木",
    profession: "东宫",
  },
  {
    nums: "05",
    color: "green",
    name: "猪",
    id: 12,
    property: "木",
    general: "水",
    profession: "西宫",
  },
  {
    nums: "25",
    color: "blue",
    name: "兔",
    id: 13,
    property: "土",
    general: "木",
    profession: "小姐",
  },
  {
    nums: "17",
    color: "green",
    name: "猪",
    id: 14,
    property: "土",
    general: "水",
    profession: "太监",
  },
  {
    nums: "37",
    color: "blue",
    name: "兔",
    id: 15,
    property: "火",
    general: "木",
    profession: "东宫",
  },
  {
    nums: "29",
    color: "red",
    name: "猪",
    id: 16,
    property: "火",
    general: "水",
    profession: "商贾",
  },
  {
    nums: "49",
    color: "green",
    name: "兔",
    id: 17,
    property: "水",
    general: "木",
    profession: "先锋",
  },
  {
    nums: "41",
    color: "blue",
    name: "猪",
    id: 18,
    property: "水",
    general: "水",
    profession: "太监",
  },
  {
    nums: "07",
    color: "red",
    name: "鸡",
    id: 19,
    property: "火",
    general: "金",
    profession: "东宫",
  },
  {
    nums: "39",
    color: "green",
    name: "牛",
    id: 20,
    property: "金",
    general: "土",
    profession: "都督",
  },
  {
    nums: "09",
    color: "green",
    name: "羊",
    id: 21,
    property: "金",
    general: "土",
    profession: "相将",
  },
  {
    nums: "28",
    color: "green",
    name: "鼠",
    id: 22,
    property: "水",
    general: "水",
    profession: "神偷",
  },
  {
    nums: "19",
    color: "red",
    name: "鸡",
    id: 23,
    property: "水",
    general: "金",
    profession: "贵妃",
  },
  {
    nums: "31",
    color: "blue",
    name: "鸡",
    id: 24,
    property: "金",
    general: "金",
    profession: "歌女",
  },
  {
    nums: "03",
    color: "blue",
    name: "牛",
    id: 25,
    property: "土",
    general: "土",
    profession: "大将",
  },
  {
    nums: "46",
    color: "red",
    name: "马",
    id: 26,
    property: "火",
    general: "火",
    profession: "太子",
  },
  {
    nums: "01",
    color: "red",
    name: "兔",
    id: 27,
    property: "金",
    general: "木",
    profession: "玉帝",
  },
  {
    nums: "02",
    color: "red",
    name: "虎",
    id: 28,
    property: "金",
    general: "木",
    profession: "大将",
  },
  {
    nums: "04",
    color: "blue",
    name: "鼠",
    id: 29,
    property: "土",
    general: "水",
    profession: "国师",
  },
  {
    nums: "16",
    color: "green",
    name: "鼠",
    id: 30,
    property: "火",
    general: "水",
    profession: "叛贼",
  },
  {
    nums: "40",
    color: "red",
    name: "鼠",
    id: 31,
    property: "金",
    general: "水",
    profession: "先锋",
  },
  {
    nums: "10",
    color: "blue",
    name: "马",
    id: 32,
    property: "金",
    general: "火",
    profession: "太子",
  },
  {
    nums: "22",
    color: "green",
    name: "马",
    id: 33,
    property: "木",
    general: "火",
    profession: "元帅",
  },
  {
    nums: "21",
    color: "green",
    name: "羊",
    id: 34,
    property: "木",
    general: "土",
    profession: "西宫",
  },
  {
    nums: "34",
    color: "red",
    name: "马",
    id: 35,
    property: "土",
    general: "火",
    profession: "秀才",
  },
  {
    nums: "33",
    color: "green",
    name: "羊",
    id: 36,
    property: "土",
    general: "土",
    profession: "夫人",
  },
  {
    nums: "43",
    color: "green",
    name: "鸡",
    id: 37,
    property: "木",
    general: "金",
    profession: "东宫",
  },
  {
    nums: "45",
    color: "red",
    name: "羊",
    id: 38,
    property: "火",
    general: "土",
    profession: "西宫",
  },
  {
    nums: "15",
    color: "blue",
    name: "牛",
    id: 39,
    property: "火",
    general: "土",
    profession: "大王",
  },
  {
    nums: "12",
    color: "red",
    name: "龙",
    id: 40,
    property: "水",
    general: "土",
    profession: "皇帝",
  },
  {
    nums: "14",
    color: "blue",
    name: "虎",
    id: 41,
    property: "土",
    general: "木",
    profession: "大王",
  },
  {
    nums: "27",
    color: "green",
    name: "牛",
    id: 42,
    property: "水",
    general: "土",
    profession: "武士",
  },
  {
    nums: "24",
    color: "red",
    name: "龙",
    id: 43,
    property: "金",
    general: "土",
    profession: "状元",
  },
  {
    nums: "26",
    color: "blue",
    name: "虎",
    id: 44,
    property: "火",
    general: "木",
    profession: "武士",
  },
  {
    nums: "36",
    color: "blue",
    name: "龙",
    id: 45,
    property: "木",
    general: "土",
    profession: "皇帝",
  },
  {
    nums: "48",
    color: "blue",
    name: "龙",
    id: 46,
    property: "土",
    general: "土",
    profession: "皇帝",
  },
  {
    nums: "38",
    color: "green",
    name: "虎",
    id: 47,
    property: "水",
    general: "木",
    profession: "都督",
  },
  {
    nums: "08",
    color: "red",
    name: "猴",
    id: 48,
    property: "火",
    general: "金",
    profession: "太监",
  },
  {
    nums: "06",
    color: "green",
    name: "狗",
    id: 49,
    property: "木",
    general: "土",
    profession: "如意",
  },
];

async function createAnimal(animal) {
  const res = await fetch("http://localhost:3001/open/update/lottery", {
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
  return data.length > 0 ? data[0]["property"] + "/" + data[0]["name"] : null;
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
    obj.particular = Math.floor(Math.random() * 49) + 1; // 特码
    obj.particular_property = filterNums(obj.particular);

    obj.ordinary1 = Math.floor(Math.random() * 49) + 1;
    obj.ordinary1_property = filterNums(obj.ordinary1);

    obj.ordinary2 = Math.floor(Math.random() * 49) + 1;
    obj.ordinary2_property = filterNums(obj.ordinary2);

    obj.ordinary3 = Math.floor(Math.random() * 49) + 1;
    obj.ordinary3_property = filterNums(obj.ordinary3);

    obj.ordinary4 = Math.floor(Math.random() * 49) + 1;
    obj.ordinary4_property = filterNums(obj.ordinary4);

    obj.ordinary5 = Math.floor(Math.random() * 49) + 1;
    obj.ordinary5_property = filterNums(obj.ordinary5);

    obj.ordinary6 = Math.floor(Math.random() * 49) + 1;
    obj.ordinary6_property = filterNums(obj.ordinary6);

    newArr.push(obj);
  }

  console.log(JSON.stringify(newArr), "--arr");
  return newArr;
};

export default async function Roll({}) {
  // const database = create();
  // const res = await createAnimal(database);

  return (
    <div className="w-full">
      <div
        className="roll pt-2 pb-2"
        style={{ backgroundImage: "url(/images/roll-bg.png)" }}
      >
        <p className="animate">
          欢迎光临【港澳新彩】论坛★汇集网上最全港澳新彩资料★永久域名:123.com
          请记
        </p>
      </div>

      <div
        className="w-full pt-2 pb-2 h-14  flex justify-center items-center text-3xl border-lime-300 text-yellow-300"
        style={{ backgroundImage: "url(/images/roll-bg2.jpeg)" }}
      >
        港澳新彩精品24码，欢迎喝彩123.com
      </div>
    </div>
  );
}
