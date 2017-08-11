<template>
  <div id="app">
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from 'components/header'
import MFooter from 'components/footer'
export default {
  components: {
    MHeader,
    MFooter
  }
}
</script>

<style lang="scss">
  #app {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
