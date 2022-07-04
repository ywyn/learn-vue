import Cookies from 'js-cookie';
const TokenKey = 'Authorization';

// 设置setLocalStorage
export function setLocalStorage(key, value) {
  window.localStorage.setItem(key, window.JSON.stringify(value));
}

//获取getLocalStorage
export function getLocalStorage(key) {
  const value = window.localStorage.getItem(key);
  return (value && window.JSON.parse(value)) || '';
}

// 设置setSessionStorage
export function setSessionStorage(key, value) {
  window.sessionStorage.setItem(key, window.JSON.stringify(value));
}

// 获取getSessionStorage
export function getSessionStorage(key) {
  const value = window.sessionStorage.getItem(key);
  return (value && window.JSON.parse(value)) || '';
}

//  获取getToken
export function getToken() {
  return Cookies.get(TokenKey);
}

// 设置setToken
export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

// 移除removeToken
export function removeToken() {
  return Cookies.remove(TokenKey);
}
