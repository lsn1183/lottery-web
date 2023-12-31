import {
  createAnimal, createColour, createFauvist, createMultizodiac,
  createOpenAnimal,
  createOpenHistoryAnimal, createRecommend, createZodiac
} from '@/api/update';
import { getRandomInt, getRandomStr, myRandom } from '@/utils/utils';
import dataSource from './dataSource';
// 插入 recommend 数据表记录
export async function insertAnimalDatabase(year = 2023) {
  const { animals, typeList } = dataSource
  const data = animals[year].map((item) => {
    let types = []
    typeList.forEach(el => {
      if (el.names.some(name => name == item.name)) {
        types.push(el.type)
      }
    })
    return { ...item, type: JSON.stringify(types), year }
  });
  let arr = data.sort((a, b) => Number(a.nums) - Number(b.nums))
  console.log('animal即将插入的data:', arr);
  // return
  await createAnimal(arr);
}
// 插入开奖记录数据
export async function insertHistoryDataSource(statrLeng = 0, endLeng, year = 2023) {
  const list = dataSource.animals[year];
  const filterNums = (key) => {
    let data = list.filter((item) => item.nums == key);
    return data.length > 0 ? data[0]['name'] + '/' + data[0]['property'] : null;
  };
  const createData = (statrLeng, endLeng) => {
    let data = [];
    for (let index = statrLeng; index < endLeng; index++) {
      const obj = {
        periods: 0,
        particular: '',
        ordinary1: '',
        ordinary2: '',
        ordinary3: '',
        ordinary4: '',
        ordinary5: '',
        ordinary6: '',
      };
      obj.periods = index + 1;
      obj.particular = getRandomStr(); // 特码
      obj.particular_property = filterNums(obj.particular);
      obj.particular_color = list.filter(
        (item) => Number(item.nums) == Number(obj.particular)
      )[0]?.color;

      obj.ordinary1 = getRandomStr();
      obj.ordinary1_property = filterNums(obj.ordinary1);
      obj.ordinary1_color = list.filter(
        (item) => Number(item.nums) == Number(obj.ordinary1)
      )[0]?.color;

      obj.ordinary2 = getRandomStr();
      obj.ordinary2_property = filterNums(obj.ordinary2);
      obj.ordinary2_color = list.filter(
        (item) => Number(item.nums) == Number(obj.ordinary2)
      )[0]?.color;

      obj.ordinary3 = getRandomStr();
      obj.ordinary3_property = filterNums(obj.ordinary3);
      obj.ordinary3_color = list.filter(
        (item) => Number(item.nums) == Number(obj.ordinary3)

      )[0]?.color;
      obj.ordinary4 = getRandomStr();
      obj.ordinary4_property = filterNums(obj.ordinary4);
      obj.ordinary4_color = list.filter(
        (item) => Number(item.nums) == Number(obj.ordinary4)
      )[0]?.color;
      obj.ordinary5 = getRandomStr();
      obj.ordinary5_property = filterNums(obj.ordinary5);
      obj.ordinary5_color = list.filter(
        (item) => Number(item.nums) == Number(obj.ordinary5)
      )[0]?.color;

      obj.ordinary6 = getRandomStr();
      obj.ordinary6_property = filterNums(obj.ordinary6);
      obj.ordinary6_color = list.filter(
        (item) => Number(item.nums) == Number(obj.ordinary6)
      )[0]?.color;
      data.push({ ...obj, year });
    }
    return data;
  };
  const database = createData(statrLeng, endLeng);
  console.log('open即将插入的data', database);
  await createOpenHistoryAnimal(database);
}
// 插入 recommend 数据表记录
export async function insertRemmDatabase(statrLeng = 0, endLeng, year = 2023) {
  const data = [];
  const NumsArr = dataSource.animals[year].map((item) => item.nums);
  let nums1, nums2, nums3;
  for (let index = statrLeng; index < endLeng; index++) {
    let nums = myRandom(JSON.parse(JSON.stringify(NumsArr)), 24)
    nums1 = nums.splice(0, 8).join('.');
    nums2 = nums.splice(0, 8).join('.');
    nums3 = nums.splice(0, 8).join('.');
    const element = {
      year,
      periods: index + 1,
      nums1,
      nums2,
      nums3,
    };
    data.push(element);
  }
  console.log('recommend即将插入的data:', data);
  // return;
  await createRecommend(data);
}
// 插入 zodiac 数据表记录
export async function insertZodiacDatabase(statrLeng = 0, endLeng, year = 2023) {
  const data = [];
  const namesArr = dataSource.animals[year].map((item) => item.name);
  let nums1;
  for (let index = statrLeng; index < endLeng; index++) {
    nums1 = myRandom(namesArr, 9).join('.');
    const element = {
      periods: index + 1,
      names: nums1,
      year: year
    };
    data.push(element);
  }
  console.log('zodiac即将插入的data:', data);
  await createZodiac(data);
}
// 插入 colour 数据表记录
export async function insertColourDatabase(statrLeng, endLeng, year = 2023) {
  console.log(statrLeng, endLeng);
  const data = [];
  let nums1, nums2, mainNums, colors, colorArr_1, colorArr_2;
  for (let index = statrLeng; index < endLeng; index++) {
    colors = myRandom(['green', 'red', 'blue'], 2); // 颜色随机2个集合
    mainNums = Array.from(
      new Set(
        [...new Array(3)].map((v) => {
          return getRandomInt(0, 4);
        })
      )
    ); //随机数主0-4数字开头
    while (mainNums.length < 3) { // 如果不够三位，不足三位数字
      // parseInt取正，小数点后面的数字全部抹掉
      let num = parseInt(Math.random() * 4); // Math.random() 0-1的随机数
      // 若等于-1则证明arr这个数组里没有num这个随机数，因此可以放进这个数组里
      if (mainNums.indexOf(num) == -1) {
        mainNums.push(num);
      }
    }
    // console.log('mainNums', mainNums, colors);
    colorArr_1 = dataSource.animals[year].filter(
      (item) => item.color === colors[0]
    );
    colorArr_2 = dataSource.animals[year].filter(
      (item) => item.color === colors[1]
    );
    let subIndex = getRandomInt(2, 7); // 随机数
    nums1 = myRandom(colorArr_1.map(item => item.nums), subIndex); // 取第一组波色随机数
    nums2 = myRandom(colorArr_2.map(item => item.nums), 10 - subIndex); // 取第二组波色随机数

    const element = {
      periods: index + 1,
      nums: [...nums1, ...nums2].join('.'),
      main: JSON.stringify(mainNums),
      color1: colors[0],
      color2: colors[1],
      year
    };
    // console.log('main', main, [...nums1, ...nums2].length);
    data.push(element);
  }
  console.log('colour即将插入的data:', data);
  await createColour(data);
}
// 插入单双四肖多肖数据表 Fourzodiac
export async function insertMultiZodiacDatabase(statrLeng, endLeng, year = 2023) {
  const data = [];
  let single, double, main, four,
  five,
  six,
  eight,
  nine,
  ten;
  
  single = dataSource.animals[year].filter(
    (item) => Number(item.nums) % 2 !== 0
  ).map(item => item.name);
  double = dataSource.animals[year].filter(
    (item) => Number(item.nums) % 2 === 0
  ).map(item => item.name);

  for (let index = statrLeng; index < endLeng; index++) {
    name1 = myRandom(single, 4); // 颜色随机2个集合
    name2 = myRandom(double, 4); // 颜色随机2个集合
    main = myRandom(['单','双'], 1)
    const element = {
      periods: index + 1,
      single: JSON.stringify(name1),
      double: JSON.stringify(name2),
      main,
      year
    };
    // console.log('main', main, [...nums1, ...nums2].length);
    data.push(element);
  }
  console.log('colour即将插入的data:', single, data);
  // return;

  await createMultizodiac(data);
}
// 插入野兽家禽数据表 Fauvist
export async function insertFauvistDatabase(statrLeng, endLeng, year = 2023) {
  // console.log('1111', dataSource.typeList)
  const data = [];
  let sky, land, beast, birds, propitious, fierce, cloudy, male, man, woman, main;
  beast = dataSource.typeList.filter(
    (item) => item.type == '野肖'
  )[0]['names'];

  birds = dataSource.typeList.filter(
    (item) => item.type == '家肖'
  )[0]['names'];

  propitious = dataSource.typeList.filter(
    (item) => item.type == '吉肖'
  )[0]['names'];

  fierce = dataSource.typeList.filter(
    (item) => item.type == '凶肖'
  )[0]['names'];
  sky = dataSource.typeList.filter(
    (item) => item.type == '天肖'
  )[0]['names'];
  land = dataSource.typeList.filter(
    (item) => item.type == '地肖'
  )[0]['names'];
  cloudy = dataSource.typeList.filter(
    (item) => item.type == '阴肖'
  )[0]['names'];
  male = dataSource.typeList.filter(
    (item) => item.type == '阳肖'
  )[0]['names'];
  man = dataSource.typeList.filter(
    (item) => item.type == '男肖'
  )[0]['names'];
  woman = dataSource.typeList.filter(
    (item) => item.type == '女肖'
  )[0]['names'];
  for (let index = statrLeng; index < endLeng; index++) {
    beast = myRandom(beast, 4)
    birds = myRandom(birds, 4)
    propitious = myRandom(propitious, 4)
    fierce = myRandom(fierce, 4)
    sky = myRandom(sky, 4)
    land = myRandom(land, 4)
    cloudy = myRandom(cloudy, 4)
    male = myRandom(male, 4)
    main = myRandom(['家肖','野肖'],1)
    const element = {
      periods: index + 1,
      beast: JSON.stringify(beast),
      birds: JSON.stringify(birds),
      fierce: JSON.stringify(fierce),
      propitious: JSON.stringify(propitious),
      sky: JSON.stringify(sky),
      land: JSON.stringify(land),
      cloudy: JSON.stringify(cloudy),
      male: JSON.stringify(male),
      man: JSON.stringify(man),
      woman: JSON.stringify(woman),
      main,
      year
    };
    // console.log('main', main, [...nums1, ...nums2].length);
    data.push(element);
  }
  console.log('即将插入的data:', data);
  await createFauvist(data);
}

// 设置开奖数据
export async function insertOpenDataSource(params) {
  const { year, periods, particular, ordinary1, ordinary2, ordinary3, ordinary4, ordinary5, ordinary6 } = params
  const list = dataSource.animals[year];
  // console.log(list, params);
  const filterNums = (key) => {
    let data = list.filter((item) => item.nums == key);
    return data.length > 0 ? data[0]['name'] + '/' + data[0]['property'] : null;
  };
  let data = [];
  const obj = {
    periods,
    particular: '',
    ordinary1: '',
    ordinary2: '',
    ordinary3: '',
    ordinary4: '',
    ordinary5: '',
    ordinary6: '',
  };
  // obj.periods = index + 1;
  obj.particular = particular; // 特码
  obj.particular_property = filterNums(obj.particular);
  obj.particular_color = list.filter(
    (item) => Number(item.nums) == Number(obj.particular)
  )[0]?.color;

  obj.ordinary1 = ordinary1;
  obj.ordinary1_property = filterNums(obj.ordinary1);
  obj.ordinary1_color = list.filter(
    (item) => Number(item.nums) == Number(obj.ordinary1)
  )[0]?.color;

  obj.ordinary2 = ordinary2;
  obj.ordinary2_property = filterNums(obj.ordinary2);
  obj.ordinary2_color = list.filter(
    (item) => Number(item.nums) == Number(obj.ordinary2)
  )[0]?.color;

  obj.ordinary3 = ordinary3;
  obj.ordinary3_property = filterNums(obj.ordinary3);
  obj.ordinary3_color = list.filter(
    (item) => Number(item.nums) == Number(obj.ordinary3)

  )[0]?.color;
  obj.ordinary4 = ordinary4;
  obj.ordinary4_property = filterNums(obj.ordinary4);
  obj.ordinary4_color = list.filter(
    (item) => Number(item.nums) == Number(obj.ordinary4)
  )[0]?.color;
  obj.ordinary5 = ordinary5;
  obj.ordinary5_property = filterNums(obj.ordinary5);
  obj.ordinary5_color = list.filter(
    (item) => Number(item.nums) == Number(obj.ordinary5)
  )[0]?.color;
  obj.ordinary6 = ordinary6;
  obj.ordinary6_property = filterNums(obj.ordinary6);
  obj.ordinary6_color = list.filter(
    (item) => Number(item.nums) == Number(obj.ordinary6)
  )[0]?.color;
  data.push({ ...obj, year });

  console.log('open即将插入的data', data);
  await createOpenAnimal(data);
}