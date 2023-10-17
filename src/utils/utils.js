export const yieldNums = (len) => {
  const length = len;
  const NumsArr = Array.from({ length: length }, (v, k) => {
    return k < 9 ? '0' + (k+1) : k+1;
  });
  return NumsArr;
};
