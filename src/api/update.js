import { API } from './config';

export async function createAnimal(params) {
  return await fetch(API + '/animal/create', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export async function createOpenAnimal(params) {
  return await fetch(API + '/open/create', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export async function createZodiac(params) {
  return await fetch(API + '/zodiac/create', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export async function createColour(params) {
  return await fetch(API + '/colour/create', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export async function createRecommend(params) {
  return await fetch(API + '/recommend/create', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export async function createMultizodiac(params) {
  return await fetch(API + '/multiZodiac/create', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export async function createFauvist(params) {
  return await fetch(API + '/fauvist/create', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(params),
  });
}