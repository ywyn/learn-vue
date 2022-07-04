<template>
  <div class="app-layout">
    <div>
      <img src="@/assets/imgs/logo.png" alt="" />
    </div>
    <input type="text" v-focus />
    <HelloWorld msg="vue"></HelloWorld>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.app-layout {
  text-align: center;
  padding-top: 60px;
}
</style>
