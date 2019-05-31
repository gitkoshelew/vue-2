<template>
  <div>
    <h1>{{ inputMessage + "!!" }}</h1>
    <app-input :msg="inputMessage" @inputMsgChange="inputMessage = $event"></app-input>
  </div>
</template>

<script>
import Input from "./Input.vue";
export default {
  data() {
    return {
      inputMessage: "mess from input"
    };
  },
  components: {
    "app-input": Input
  }
};
</script>
