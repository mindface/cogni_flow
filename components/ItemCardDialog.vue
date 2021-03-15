<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          tag="div"
          class="mx-2 card-btn-top"
          small
          color="#0097a7"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon
          >mdi-post</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          <v-text-field
            color="white"
            label="タイトル"
            v-model="title"
          ></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-textarea
            autocomplete="入力してください。"
            label="詳細"
            v-model="text"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            close
          </v-btn> 
          <v-btn
            color="green darken-1"
            text
            @click="updateAction"
          >
            Save
          </v-btn>
          <v-btn
            tag="div"
            class="mx-2"
            dark
            small
            color="#0097a7"
          >
            <v-icon
              aria-hidden="false"
              @click="deleteAction"
            >mdi-delete</v-icon>
          </v-btn> 
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { Helper } from '~/helper/helper'


export default Vue.extend({
  props: {
    dataItem:{
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      dialog: false,
      title: this.dataItem.title,
      text: this.dataItem.text,
    }
  },
  methods: {
    deleteAction(){
      this.$accessor.setData.deleteCardAction(this.dataItem.id);
      this.dialog = false;
    },
    updateAction(){
      const item = {
        id: this.dataItem.id,
        title: this.title,
        text: this.text,
        color: 'red lighten-2',
        icon: 'mdi-book-variant',
        time: Helper.getNowTime()
      }
      console.log(item)
      this.$accessor.setData.updateCardAction(item);
      this.dialog = false;
    }
  },
})
</script>