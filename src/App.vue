<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">home</router-link>
    <router-link to="/Page1">page1</router-link>
    <router-link to="/Page2">page2</router-link>
    <router-link to="/Page3">page3</router-link>
    <router-link to="/Page4">page4</router-link>
    <router-link to="/Page4/PageSmall4">pageSmall4</router-link>
    <router-link to="/Page5">page5</router-link>
    <router-link to="/Page6">page6</router-link>
    <router-link to="/Page7">page7</router-link>
    <router-link to="/Page8">page8</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
