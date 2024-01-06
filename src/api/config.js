export const API = 'http://localhost:3001';
export const CLIENT_API = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://leihou360.xyz/api';

export const Title = '欧洲彩';
export const openTime = process.env.NODE_ENV === 'development' ? '14:14' : '22:35';

// console.log('process.env', process.env.NODE_ENV);
