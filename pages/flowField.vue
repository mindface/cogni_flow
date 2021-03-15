<template>
  <div class="content">
    {{title}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      title: 'title'
    }
  }
})
</script>
