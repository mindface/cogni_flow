<template>
  <div class="wrapper">
    <ContainerflowUser />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContainerflowUser from '~/container/ContainerflowUser.vue'

export default Vue.extend({
  components: {
    ContainerflowUser
  }
})
</script>
