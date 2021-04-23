<template>
  <div id="app">
    <v-nav-bar />
    <v-main-wrapper />
  </div>
</template>

<script>
  import vMainWrapper from './components/v-main-wrapper'
  import vNavBar from './components/v-nav-bar'

export default {
  name: 'app',
  components: {
    vNavBar,
    vMainWrapper,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
