<template>
  <v-timeline
      align-top
      :dense="$vuetify.breakpoint.smAndDown"
    >
    <v-timeline-item
      v-for="(item, i) in dataItems"
      :key="i"
      icon="mdi-dialpad"
      color="#0097a7"
      fill-dot
    >
      <ItemCard :data-item="item" />
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
import Vue from 'vue'
import draggable from 'vuedraggable';
import ItemCard from './ItemCard.vue'

export default Vue.extend({
  components: {
    draggable,
    ItemCard
  },
  props: {
    dataItems:{
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      btnsshow: false,
    }
  },
  methods: {
    fadeAction(){
      this.btnsshow = !this.btnsshow
    },
  },
})
</script>