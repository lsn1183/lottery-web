import { API } from './config';

const pageSize = 10;
const pageNum = 1;

export const getAnimalList = async ({ year }) => {
  const result = await fetch(API + '/animal/list' + `?year=${year}`);
  return await result.json();
};

// 获取最新n条历史记录
export const getLatestOpenHistoryData = async (params = {}) => {
  const result = await fetch(
    API + '/history/page' + `?pageNum=${pageNum || 1}&pageSize=${pageSize || 10}&year=${params?.year}`
  );
  const { data } = await result.json();
  return data;
};

// 获取最新n条历史记录
export const getLatestRecommendData = async (params = {}) => {
  // const { pageNum, pageSize } = params
  const result = await fetch(
    API +
    '/recommend/page' +
    `?pageNum=${pageNum || 1}&pageSize=${pageSize || 10}&year=${params?.year}`
  );
  const { data } = await result.json();
  return data;
};

// 获取最新n条历史记录
export const getLatestZodiacData = async (params = {}) => {
  // const { pageNum, pageSize } = params
  const result = await fetch(
    API + '/zodiac/page' + `?pageNum=${pageNum || 1}&pageSize=${pageSize || 10}&year=${params?.year}`
  );
  const { data } = await result.json();
  return data;
};

// 获取最新n条历史记录
export const getLatestColourData = async (params = {}) => {
  // const { pageNum, pageSize } = params
  const result = await fetch(
    API + '/colour/page' + `?pageNum=${pageNum || 1}&pageSize=${pageSize || 10}&year=${params?.year}`
  );
  const { data } = await result.json();
  return data;
};

// 获取最新n条历史记录
export const getLatestFourZodiacData = async (params = {}) => {
  // const { pageNum, pageSize } = params
  const result = await fetch(
    API + '/fourzodiac/page' + `?pageNum=${pageNum || 1}&pageSize=${pageSize || 10}&year=${params?.year}`
  );
  const { data } = await result.json();
  return data;
};

// 获取最新n条历史记录
export const getLatestFauvistData = async (params = {}) => {
  // const { pageNum, pageSize } = params
  const result = await fetch(
    API + '/fauvist/page' + `?pageNum=${pageNum || 1}&pageSize=${pageSize || 10}&year=${params?.year}`
  );
  const { data } = await result.json();

  return data;
};


// 获取最新n条历史记录
export const getLatestAllHistoryData = async (params = {}) => {
  const result = await fetch(
    API + '/history'
  );
  const { data } = await result.json();
  return data;
};