<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/android-chrome-256x256.png">
    <app-example></app-example>
    <HelloWorld msg="illegal"/>
    <Search/>
    <Result/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Search from "./components/Search.vue";
import Result from "./components/Result.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Search,
    Result
  }
};
</script>

<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 50px;
}
</style>
