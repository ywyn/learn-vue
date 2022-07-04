import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import router from './router';
import store from './store';

import 'normalize.css';
import { LoadingBar } from 'element-gui';

import '@/plugins/element';
import '@/styles/index.scss';
import '@/utils/register';

import App from './App.vue';

import request from '@/utils/request';
request.post('mock/route/to/demo').then((res) => {
  console.log(res);
});

// import { getToken } from 'utils/storage';

router.beforeEach((to, from, next) => {
  LoadingBar.start();
  // if (getToken() || to.name === 'Login') {
  next();
  // } else {
  //   next('/login');
  // }
});
router.afterEach(() => {
  LoadingBar.finish();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
