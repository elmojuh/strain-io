<template>
  <div class="text-center centralizar">
    <button
      class="aumentar-botao bg-green-700 hover:bg-green-800 text-white font-bold border border-green-700 rounded-full"
    >
      Clique Aqui!
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BottomComponent',
});
</script>

<style scoped>
.centralizar {
  margin: 10em 0em 10em 0em;
}
.aumentar-botao {
  width: 20em;
  height: 20em;
  border: 20px;
  text-align: center;
}
</style>
