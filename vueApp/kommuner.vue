<template>
  <div>
    <ul>
      <li v-for="kommune in kommuner" :key="kommune.navn">
        {{ kommune.navn }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
const regeneratorRuntime = require("regenerator-runtime");
const modul = require("../shared/kommuner");

export default Vue.extend({
  data() {
    return {
      kommuner: [],
    };
  },
  async created() {
    let k = await modul.hentKommuner();
    this.kommuner = k;
  },
});
</script>
