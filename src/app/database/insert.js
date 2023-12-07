import {
  createAnimal,
  createColour,
  createRecommend,
  createZodiac,
} from '@/app/api/update';
import { getRandomInt, getRandomStr, myRandom } from '@/utils/utils';
import dataSource from './dataSource';

// 插入开奖记录数据
export async function insertOpenDataSource(leng = 0) {
  const list = dataSource.amimalList;
  const filterNums = (key) => {
    let data = list.filter((item) => item.nums == key);
    return data.length > 0 ? data[0]['name'] + '/' + data[0]['property'] : null;
  };
  const createData = (leng) => {
    let newArr = [];
    for (let index = 0; index < leng; index++) {
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
        (item) => item.nums == obj.particular
      )[0]['color'];

      obj.ordinary1 = getRandomStr();
      obj.ordinary1_property = filterNums(obj.ordinary1);
      obj.ordinary1_color = list.filter(
        (item) => item.nums == obj.ordinary1
      )[0]['color'];

      obj.ordinary2 = getRandomStr();
      obj.ordinary2_property = filterNums(obj.ordinary2);
      obj.ordinary2_color = list.filter(
        (item) => item.nums == obj.ordinary2
      )[0]['color'];

      obj.ordinary3 = getRandomStr();
      obj.ordinary3_property = filterNums(obj.ordinary3);
      obj.ordinary3_color = list.filter(
        (item) => item.nums == obj.ordinary3
      )[0]['color'];

      obj.ordinary4 = getRandomStr();
      obj.ordinary4_property = filterNums(obj.ordinary4);
      obj.ordinary4_color = list.filter(
        (item) => item.nums == obj.ordinary4
      )[0]['color'];

      obj.ordinary5 = getRandomStr();
      obj.ordinary5_property = filterNums(obj.ordinary5);
      obj.ordinary5_color = list.filter(
        (item) => item.nums == obj.ordinary5
      )[0]['color'];

      obj.ordinary6 = getRandomStr();
      obj.ordinary6_property = filterNums(obj.ordinary6);
      obj.ordinary6_color = list.filter(
        (item) => item.nums == obj.ordinary6
      )[0]['color'];

      newArr.push(obj);
    }
    // console.log(newArr, "--arr");
    return newArr;
  };
  const database = createData(leng);
  // console.log(database.length, Math.floor((database.length / 2)));
  // let data1 = database.slice(0, Math.floor(database.length / 2));
  // let data2 = database.slice(Math.floor(database.length / 2), database.length);
  console.log('Animal即将插入的data', database);
  await createAnimal(database);
}
// 插入 recommend 数据表记录
export async function insertRemmDatabase(leng) {
  // console.log('1111', dataSource.amimalList)
  const data = [];
  const NumsArr = dataSource.amimalList.map((item) => item.nums);
  let nums1, nums2, nums3;
  for (let index = 0; index < leng; index++) {
    (nums1 = myRandom(JSON.parse(JSON.stringify(NumsArr)), 7).join('.')),
      (nums2 = myRandom(JSON.parse(JSON.stringify(NumsArr)), 7).join('.')),
      (nums3 = myRandom(JSON.parse(JSON.stringify(NumsArr)), 7).join('.'));
    const element = {
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
export async function insertZodiacDatabase(leng) {
  // console.log('1111', dataSource.amimalList)
  const data = [];
  let nums1;
  const NamesArr = dataSource.amimalList.map((item) => item.name);
  for (let index = 0; index < leng; index++) {
    nums1 = myRandom(JSON.parse(JSON.stringify(NamesArr)), 9).join('.');
    const element = {
      periods: index + 1,
      names: nums1,
    };
    data.push(element);
  }
  console.log('zodiac即将插入的data:', data);
  // return;
  await createZodiac(data);
}

// 插入 colour 数据表记录
export async function insertColourDatabase(leng) {
  // console.log('1111', dataSource.amimalList)
  const data = [];
  let nums1, nums2, main, colors, colorArr_1, colorArr_2;
  // main= myRandom(['green','red','blue'], 2) // 主什么数字开头
  // nums1 = myRandom(color1, 9).join('.')
  for (let index = 0; index < leng; index++) {
    colors = myRandom(['green', 'red', 'blue'], 2); // 颜色随机2个集合
    main = Array.from(
      new Set(
        [...new Array(3)].map((v) => {
          return getRandomInt(0, 4);
        })
      )
    ); // 主什么数字开头，随机数集合
    while (main.length < 3) {
      let num = parseInt(Math.random() * 4);
      // parseInt取正，小数点后面的数字全部抹掉
      // Math.random() 0-1的随机数
      // this.arr.indexOf(num)若等于-1则证明arr这个数组里没有num这个随机数，因此可以放进这个数组里
      if (main.indexOf(num) == -1) {
        main.push(num);
      }
    }
    // console.log(main,'main');
    colorArr_1 = dataSource.amimalList.filter(
      (item) => item.color === colors[0]
    );
    colorArr_2 = dataSource.amimalList.filter(
      (item) => item.color === colors[1]
    );
    let subIndex = getRandomInt(3, 7); // 随机数
    nums1 = myRandom(colorArr_1, subIndex)?.map((item) => item.nums); // 取第一组波色随机数
    nums2 = myRandom(colorArr_2, 10 - subIndex)?.map((item) => item.nums); // // 取第二组波色随机数
    const element = {
      periods: index + 1,
      nums: [...nums1, ...nums2].join('.'),
      main: JSON.stringify(main),
      color1: colors[0],
      color2: colors[1],
    };
    // console.log('main', main, [...nums1, ...nums2].length);
    data.push(element);
  }
  console.log('colour即将插入的data:', data);
  // return;
  await createColour(data);
}
