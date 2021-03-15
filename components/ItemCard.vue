<template>
  <v-card
　  color="cyan darken-2 item--card"
    dark
  >
    <v-card-title class="card__title">{{ dataItem.title }}</v-card-title>
    <v-card-text class="white text--primary">
      <div class="card__text">{{ dataItem.text }}</div>
    <v-btn
      tag="div"
      class="mx-2 card-btn"
      dark
      small
      color="#0097a7"
    >
      <v-icon
        aria-hidden="false"
        @click="deleteAction"
      >mdi-delete</v-icon>
    </v-btn>
    <ItemCardDialog :data-item="dataItem" />
    </v-card-text>
      <v-expand-transition>
        <div v-show="show" class="category-box">
          <v-divider></v-divider>
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="#0097a7"
            @click="updateAction"
          >save</v-btn>  
        </div>
      </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Helper } from '~/helper/helper'
import ItemCardDialog from './ItemCardDialog.vue'

export default Vue.extend({
  components: {
    ItemCardDialog
  },
  props: {
    dataItem:{
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    fadeAction(){
      this.show = !this.show
    },
    deleteAction(){
      this.$accessor.setData.deleteCardAction(this.dataItem.id);
    }
  },
})
</script>