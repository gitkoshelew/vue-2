<template>
  <div class="result" v-show="resultsShow" transition="result__transition">
    <div class="result__text" v-for="(item,key) in results" v-bind:key="key">
      <a :href="item.url" class="result__title">{{item.title}}</a>
      <div class="result__ult">{{item.url}}</div>
      <div class="result__snippet" v-html="item.snippet"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    results() {
      return this.$store.getters.results;
    },
    resultsShow() {
      return this.$store.getters.resultsShow;
    }
  }
};
</script>

<style lang="scss" scoped>
.result {
  background: darkorchid;
  text-align: left;
  padding: 20px;
  margin-top: 60px;
  position: relative;
  &__transition {
    left: -100%;
  }
  &__text {
    padding: 20px;
  }
}
</style>
