export const API =  process.env.NODE_ENV === 'development' ? 'https://12312378.xyz/api' :'http://localhost:3001' ;
export const CLIENT_API = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://12312378.xyz/api';

export const Title = '欧洲彩';
export const openTime = process.env.NODE_ENV === 'development' ? '20:15' : '22:35';

// console.log('process.env', process.env.NODE_ENV);
