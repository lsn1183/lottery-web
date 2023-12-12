import { API } from './config';

const pageSize = 20;
const pageNum = 1;

export const getAnimalList = async () => {
  const result = await fetch(API + '/animal/list');
  return await result.json();
};
// 获取最新20条历史记录
export const getLatestOpenData = async (params = {}) => {
  const result = await fetch(
    API + '/open/page' + `?pageNum=${pageNum || 1}&pageSize=${pageSize || 10}`
  );
  const { data } = await result.json();
  return data;
};

// 获取最新20条历史记录
export const getLatestRecommendData = async (params = {}) => {
  // const { pageNum, pageSize } = params
  const result = await fetch(
    API +
    '/recommend/page' +
    `?pageNum=${pageNum || 1}&pageSize=${pageSize || 10}`
  );
  const { data } = await result.json();
  return data;
};

// 获取最新20条历史记录
export const getLatestZodiacData = async (params = {}) => {
  // const { pageNum, pageSize } = params
  const result = await fetch(
    API + '/zodiac/page' + `?pageNum=${pageNum || 1}&pageSize=${pageSize || 10}`
  );
  const { data } = await result.json();
  return data;
};

// 获取最新20条历史记录
export const getLatestColourData = async (params = {}) => {
  // const { pageNum, pageSize } = params
  const result = await fetch(
    API + '/colour/page' + `?pageNum=${pageNum || 1}&pageSize=${pageSize || 10}`
  );
  const { data } = await result.json();
  return data;
};

// 获取最新20条历史记录
export const getLatestFourZodiacData = async (params = {}) => {
  // const { pageNum, pageSize } = params
  const result = await fetch(
    API + '/fourzodiac/page' + `?pageNum=${pageNum || 1}&pageSize=${pageSize || 10}`
  );
  const { data } = await result.json();
  return data;
};