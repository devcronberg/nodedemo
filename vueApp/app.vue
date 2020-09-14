<template>
  <div>
    <h1>Kommuner i Danmark via Vue</h1>
    <kommuner></kommuner>
  </div>
</template>

<script>
import Vue from "vue";
import kommuner from "./kommuner.vue";

export default Vue.extend({
  components: {
    kommuner: kommuner,
  },
});
</script>
