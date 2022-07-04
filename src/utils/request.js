import axios from 'axios';
import router from '../router/index';
import { Message, LoadingBar } from 'element-gui';
import { getToken } from './storage';

// 创建axios 实例
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000, // 请求超时时间
});

// request 拦截器
request.interceptors.request.use(
  (config) => {
    // console.log(config);
    if (getToken()) {
      config.headers.Authorization = getToken();
    }

    LoadingBar.start();
    // 这里可以自定义一些config 配置
    return config;
  },
  (error) => {
    //  这里处理一些请求出错的情况
    Promise.reject(error);
  }
);

// response 拦截器
request.interceptors.response.use(
  (response) => {
    LoadingBar.finish();
    if (!getToken() && router.currentRoute.name !== 'Login') {
      router.push('/login');
    }
    const res = response.data;
    // 这里处理一些response 正常放回时的逻辑
    return res;
  },
  (error) => {
    // 这里处理一些response 出错时的逻辑
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求';
          break;
        case 401:
          error.message = '未授权，请重新登录';
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        case 404:
          error.message = '请求错误,未找到该资源';
          break;
        case 405:
          error.message = '请求方法未允许';
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器端出错';
          break;
        case 501:
          error.message = '网络未实现';
          break;
        case 502:
          error.message = '网络错误';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '网络超时';
          break;
        case 505:
          error.message = 'http版本不支持该请求';
          break;
        default:
          error.message = '连接错误' + error.response.status;
      }
      Message({
        message: error.message,
        type: 'error',
      });
    } else {
      Message({
        message: '连接到服务器失败',
        type: 'error',
      });
    }
    return Promise.reject(error);
  }
);

export default request;
