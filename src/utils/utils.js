export const yieldNums = (len) => {
  const length = len;
  const NumsArr = Array.from({ length: length }, (v, k) => {
    return k < 9 ? "0" + (k + 1) : k + 1;
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
  if (time === void 0) return "0";
  const addZero = (n) => (n >= 10 ? n : "0" + n);
  const timeArr = [
    { s: "天", t: 86400 },
    { s: "时", t: 3600 },
    { s: "分", t: 60 },
    { s: "秒", t: 1 },
  ];
  time = Math.ceil(time / 1000);
  let res = "";
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
