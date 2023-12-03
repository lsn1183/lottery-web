

const URL = 'http://localhost:3001'

export const getAnimalList = async () => {
  const result = await fetch(URL + "/animal/list");
  return await result.json();
}
// 获取最新20条历史记录
export const getLatestOpenData = async (params = {}) => {
  // ?pageNum=1&pageSize=20&periods=29
  const { pageNum, pageSize } = params
  const result = await fetch(URL + "/open/page" + `?pageNum=${pageNum || 1}&pageSize=${pageSize || 10}`)
  const { data } = await result.json();
  return data;
}