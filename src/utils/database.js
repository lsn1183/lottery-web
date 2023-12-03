import { API } from "./config";
import dataSource from "./dataSource";



export function inertOpenDataSource() {
  const list = amimalList
  const filterNums = (key) => {
    let data = list.filter((item) => item.nums === key)
    return data.length > 0 ? data[0]["property"] + "/" + data[0]["name"] : null;
  };

  const create = () => {
    let newArr = [];
    for (let index = 0; index < 295; index++) {
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
    // console.log(JSON.stringify(newArr), "--arr");
    return newArr;
  };

  async function createAnimal(animal) {
    const res = await fetch(API + "/open/update", {
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
  const database = create();
  const res = createAnimal(database);
  return res
}

export async function inertRemmDatabase() {

  console.log('1111', dataSource.amimalList)


  const animal = {
    periods: 1,
    nums: '07.29.42.20.01.44.33.32',
    names: '鸡.猴.鼠.马.牛.羊.龙.虎.蛇',
    colors: '',
    propertys: ''
  }

  const res = await fetch(API + "/recommend/add", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(animal),
  });

}




