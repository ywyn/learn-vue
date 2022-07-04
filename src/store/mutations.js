const mutations = {
  USERINFO(state, payload) {
    state.userInfo = payload;
  },
  ISCOLLAPSE(state, payload) {
    state.isCollapse = payload;
  },
};
export default mutations;
