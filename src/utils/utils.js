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
