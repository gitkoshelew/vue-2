<template>
  <div>
    <h1>{{ message + "!!" }}</h1>
    <app-input :msg="inputMessage" @inputMsgChange="inputMessage = $event"></app-input>
  </div>
</template>

<script>
import Input from "./Field.vue";
export default {
  data() {
    return {
      inputMessage: "mess from inpu"
    };
  },
  components: {
    "app-input": Input
  }
};
</script>
