import axios from 'axios';
import {stringify as qs} from 'querystringify';
import Cache from './helpers/Chace';

export const SITE_URL = 'https://tempwp.orderwebsitenow.com';

const CONSUMER_KEY = 'ck_3c19be5991be88176096737429edd9612b0ac80b';
const CONSUMER_SECRET = 'cs_6e016ce51793f3b41aff2c1c729f09fb6122ec6d';

axios.defaults.baseURL = SITE_URL;
axios.defaults.headers['Content-Type'] = 'application/json';

axios.interceptors.request.use((config) => {
  const s = config.url.indexOf('?') > -1 ? '&' : '?';
  // eslint-disable-next-line no-multi-assign,no-param-reassign
  config.url = config.url += `${s}consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
  return config;
}, error => Promise.reject(error));

// eslint-disable-next-line import/prefer-default-export
export function getProducts(data) {
  const s = qs(data);
  const cache = Cache.getCache(`getProducts${data.page}`, data);
  if (cache) return cache;

  const res = axios.get(`/wp-json/wc/v3/products?${s}`);
  Cache.saveCache(res, `getProducts${data.page}`, data, 5);
  return res;
}


export function getSingleProduct(slug) {
  const s = qs({slug});
  return axios.get(`/wp-json/wc/v3/products?${s}`);
}

export function getFiltrePrice(price) {
  const s = qs({price});
  return axios.get(`/wp-json/wc/v3/products?${s}`);
}


export function getCheapOrExpensiveProducts(isCheap = true) {
  const s = qs({
    orderby: 'price',
    order: isCheap ? 'asc' : 'desc',
    per_page: 1,
  });
  return axios.get(`/wp-json/wc/v3/products?${s}`);
}


export function getFiltreColor() {
  return axios.get('/wp-json/wc/v3/products/attributes/1/terms/');
}

export function addToCartFetch(product_id, quantity = 1) {
  return axios.post('/wp-json/wc/v2/cart/add?', {product_id, quantity});
}

export function getCartData() {
  return axios.get('/wp-json/wc/v2/cart');
}


export function clearCart() {
  return axios.post('/wp-json/wc/v2/cart/clear');
}

export function cartItem() {
  return axios.get('/wp-json/wc/v2/cart/count-items');
}

export function delCartItem(cart_item_key) {
  const s = qs({cart_item_key});
  return axios.delete(`/wp-json/wc/v2/cart/cart-item?${s}`);
}


export function cartCountTotal() {
  return axios.get('/wp-json/wc/v2/cart/totals');
}


export function updateCartItem(cart_item_key, quantity) {
  return axios.post('/wp-json/wc/v2/cart/cart-item', {cart_item_key, quantity});
}

export function getFindData(search) {
  const query = qs({search})
  return axios.get(`/wp-json/wc/v3/products?${query}`)

}