<template>
  <div class="background">
      <Bottom />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Bottom from '../components/Bottom.vue';

export default Vue.extend({
  name: 'homeComponent',
  components: { Bottom },
});
</script>

<style scoped>
.background {
  padding: 40px, 40px, 40px, 40px;
}
</style>
