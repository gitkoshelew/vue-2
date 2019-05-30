<template>
  <div>
    <h3>{{ "props " + msg }}</h3>
    <input type="text" :value="msg" @input="changeMess">
    <input type="text" v-model="mess">
    <p>{{ mess }}</p>
  </div>
</template>

<script>
export default {
  props: ["msg"],
  data() {
    return {
      mess: ""
    };
  },
  methods: {
    changeMess(event) {
      this.mess = event.target.value;
      this.$emit("inputMsgChange", this.mess);
    }
  }
};
</script>

