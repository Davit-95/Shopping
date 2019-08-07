import _ from 'lodash';

function getAllCaches() {
  let cache;
  try {
    cache = JSON.parse(sessionStorage.getItem('apiCache'));
  } catch (e) {
    //
  }
  return cache || {};
}

function getCache(key, params) {
  const cache = getAllCaches();
  if (cache[key]) {
    const now = new Date();
    if (_.isEqual(cache[key].params, params) && cache[key].timestamp >= now) {
      return { data: cache[key].data };
    }
  }
  return null;
}


async function saveCache(res, key, params, houars) {
  const { data } = await res;
  const cache = getAllCaches();
  const now = new Date();
  const timestamp = now.setHours(now.getHours() + houars);
  cache[key] = {
    data,
    params,
    timestamp,
  };
  sessionStorage.setItem('apiCache', JSON.stringify(cache));
}

function deleteCache(key) {
  const cache = getAllCaches();
  delete cache[key];
  sessionStorage.setItem('apiCache', JSON.stringify(cache));
}

function deleteAllCaches() {
  sessionStorage.removeItem('apiCache');
}


export default {
  getCache,
  saveCache,
  deleteCache,
  deleteAllCaches,
};
