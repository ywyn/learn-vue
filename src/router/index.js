import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((error) => error);
};

Vue.use(VueRouter);

const routes = [
  //首页
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "layout" */ '../views/layout/index.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
