// 生成0-49字符串
export const getRandomStr = () => {
  let num = Math.floor(Math.random() * 49) + 1;
  const str = num < 10 ? '0' + num : JSON.stringify(num);
  return str;
};

export const yieldNums = (len) => {
  const length = len;
  const NumsArr = Array.from({ length: length }, (v, k) => {
    return k < 9 ? '0' + (k + 1) : k + 1;
  });
  return NumsArr;
};

// 获取奇数
export const getUnevenNumber = (data) => {
  const nums = data.filter((item) => item.nums % 2 !== 0);
  return nums;
};
// 获取偶数
export const getEvenNumber = (data) => {
  const nums = data.filter((item) => item.nums % 2 === 0);
  return nums;
};

/** 格式化剩余时间 */
export function formatRemainTime(time = 0) {
  // 当初始化时间为 undefined 时返回
  if (time === void 0) return '0';
  const addZero = (n) => (n >= 10 ? n : '0' + n);
  const timeArr = [
    { s: '天', t: 86400 },
    { s: '时', t: 3600 },
    { s: '分', t: 60 },
    { s: '秒', t: 1 },
  ];
  time = Math.ceil(time / 1000);
  let res = '';
  for (let i = 0; i < timeArr.length - 1; i++) {
    const item = timeArr[i];
    if (time >= item.t) {
      const tartget = time / item.t;
      res += (!i ? tartget : addZero(tartget)) + item.s;
      time %= item.t;
    }
  }
  res += addZero(time) + timeArr.at(-1)?.s;
  return res;
}
// 数组分组
export function group(array, subGroupLength) {
  var index = 0;
  var newArray = [];
  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)));
  }

  return newArray;
}

/**
 * @params arr 传入的源数组, arr非类数组
 * @params length 需要获取的元素的个数
 */
export function myRandom(arr = [], length) {
  // console.log('arr, length', arr, length);
  let ranNum = length || 0;
  let hash = {};
  let result = [];
  let index = 0;
  while (ranNum > 0) {
    index = Math.floor(Math.random() * arr.length);
    if (!hash[arr[index]]) {
      hash[arr[index]] = 1;
      result.push(arr[index]);
      ranNum = ranNum - 1;
    };
  }
  return result;
}


/**
* @params arr 传入的源数组
* @params length 需要获取的元素的个数
  名称转数字 , length
*/
export function nameToNum(str, arr = []) {
  let newArr = str?.split('.'); // 字符串转数组
  if (arr.length == 0) return [];
  const list = newArr.map((name) => {
    let index = arr.findIndex((item) => item.name == name);
    let nums = arr[index].nums;
    return nums;
  });
  return list;
}

/** 随机数字产生
 * @params min 最小起始范围
 * @params max 最大结束范围
 */
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** 获取本期中奖数据
 * @params openData 开奖记录数据
 * @params item 当前单期数据
 */
export function getOpenItem(openData, item) {
  const index = openData.findIndex((o) => item.periods == o.periods);
  const openNum = index != -1 ? openData[index].particular : undefined;
  const openName =
    index != -1
      ? openData[index].particular_property?.substring(0, 1)
      : undefined;
  const openColor = index != -1
    ? openData[index].particular_color
    : undefined;
  return { openNum, openName, openColor };
}
