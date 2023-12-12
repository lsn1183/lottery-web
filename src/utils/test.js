

function myRandom(arr, length) {
  let ranNum = length;
  let hash = {};
  let result = [];
  let index;
  while (ranNum > 0) {
    index = Math.floor(Math.random() * arr.length);
    if (!hash[arr[index]]) {
      hash[arr[index]] = 1;
      result.push(arr[index]);
      ranNum--;
    };
  }
  console.log('随机:', result);
  return result;
}

const arr = [{
  nums: '01',
  color: 'red',
  name: '兔',
  id: 27,
  property: '金',
  general: '木',
  profession: '玉帝'
},
{
  nums: '21',
  color: 'green',
  name: '羊',
  id: 34,
  property: '木',
  general: '土',
  profession: '西宫'
},
{
  nums: '33',
  color: 'green',
  name: '羊',
  id: 36,
  property: '土',
  general: '土',
  profession: '夫人'
},
{
  nums: '43',
  color: 'green',
  name: '鸡',
  id: 37,
  property: '木',
  general: '金',
  profession: '东宫'
},
{
  nums: '45',
  color: 'red',
  name: '羊',
  id: 38,
  property: '火',
  general: '土',
  profession: '西宫'
},
{
  nums: '15',
  color: 'blue',
  name: '牛',
  id: 39,
  property: '火',
  general: '土',
  profession: '大王'
},
{
  nums: '27',
  color: 'green',
  name: '牛',
  id: 42,
  property: '水',
  general: '土',
  profession: '武士'
}
]

myRandom(arr.map(item => item.name), 4)
