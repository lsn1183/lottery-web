import { API } from "./config";
import dataSource from "./dataSource";
import { myRandom } from "./utils";

// 插入开奖记录数据
export async function inertOpenDataSource(leng = 0) {
  const list = dataSource.amimalList
  const filterNums = (key) => {
    let data = list.filter((item) => item.nums == key);
    return data.length > 0 ? data[0]["name"] + "/" + data[0]["property"] : null;
  };

  const getRandom = () => {
    let num = Math.floor(Math.random() * 49) + 1;
    num = num < 10 ? "0" + num : num;
    return num;
  };

  const create = (leng) => {
    let newArr = [];
    for (let index = 0; index < leng; index++) {
      const obj = {
        periods: 0,
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
    // console.log(newArr, "--arr");
    return newArr;
  };

  async function createAnimal(data) {
    const res = await fetch(API + "/open/update", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  }

  const database = create(leng);
  // console.log(database.length, Math.floor((database.length / 2)));
  let data1 = database.slice(0, Math.floor((database.length / 2)));
  let data2 = database.slice(Math.floor((database.length / 2)), database.length);

  // console.log(data1.length + data2.length);
  return
  await createAnimal(data1);
  await createAnimal(data2);
}
// 插入recommend 数据表记录
export async function inertRemmDatabase(leng) {
  // console.log('1111', dataSource.amimalList)
  const data = []
  const NumsArr = [
    '18', '30', '20', '42', '32', '11',
    '44', '23', '35', '47', '13', '05',
    '25', '17', '37', '29', '49', '41',
    '07', '39', '09', '28', '19', '31',
    '03', '46', '01', '02', '04', '16',
    '40', '10', '22', '21', '34', '33',
    '43', '45', '15', '12', '14', '27',
    '24', '26', '36', '48', '38', '08',
    '06'
  ]

  let nums1, nums2, nums3;
  for (let index = 0; index < leng; index++) {
    nums1 = myRandom(JSON.parse(JSON.stringify(NumsArr)), 7).join('.'),
      nums2 = myRandom(JSON.parse(JSON.stringify(NumsArr)), 7).join('.'),
      nums3 = myRandom(JSON.parse(JSON.stringify(NumsArr)), 7).join('.');
    const element = {
      periods: index + 1,
      nums1,
      nums2,
      nums3,
    }
    data.push(element)
  }

  console.log('即将插入的data', data);

  // return
  const res = await fetch(API + "/recommend/add", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

}




