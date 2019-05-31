<template>
  <div class="Search">
    <input type="text" class="Search__input" v-model="query">
    <button class="Search__button" @click="search()">Search</button>
    <button class="Search__button" @click="resultShow()">Show</button>
  </div>
</template>
<script>
//import store from "../store/index.js";// local
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      //store.dispatch('search', this.query) //local
      this.$store.dispatch("search", this.query); //global
    },
    resultShow() {
      this.$store.dispatch("actionToggleResultShow");
    }
  }
};
</script>
<style scoped>
.Search {
  background: slateblue;
  font-size: 20px;
  padding: 20px 30px;
}
</style>


