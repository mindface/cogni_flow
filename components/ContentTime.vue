<template>
  <div class="content">
    <v-card
      class="mx-auto card-box"
      max-width="960"
      >
      <v-card-title
        class="teal lighten-2 white--text"
      >
        <span class="title">メッドのカスタマイズ</span>
        <v-spacer></v-spacer>
        <div class="text-center">
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="lighten-2"
                v-bind="attrs"
                v-on="on"
              >
                Click Me
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-4">
                新規カード入力
              </v-card-title>

              <v-text-field
                label="タイトル"
                v-model="addCardTitle"
                hide-details="auto"
              ></v-text-field>
              <v-textarea
                counter
                label="文章"
                :value="addCardSentence"
              ></v-textarea>
              <v-text-field label="カテゴリ"></v-text-field>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="addCard"
                >
                  追加
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-card-title>
      <ItemTimeLine :data-items="cardItems" />
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ItemTimeLine from './ItemTimeLine.vue'
import { Helper } from '~/helper/helper'
import { FieldData,MethodCrad,sendUpdateCard } from '../store/interfaces'


export default Vue.extend({
  components: {
    ItemTimeLine
  },
  data(){
    return {
      interval: null,
      dialog: false,
      addCardTitle: 'タイトルを入力してください。',
      addCardSentence: '追加文章を入力してください。',
    }
  },
  computed:{
    cardItems(){
      const items = this.$accessor.setData.fieldItems
      const viewId = this.$accessor.setData.viewFieldId
      let sendData:MethodCrad[] = [];
      items.map( (item,index) => {
        if(item.fieldId === viewId ) {
          sendData = item.cardItems;
        }
      });
      return sendData ? sendData : [];
    }
  },
  mounted() {
  },
  methods: {
    addCard(){
      const item = {
        id: this.cardItems.length++,
        title: this.addCardTitle,
        text: this.addCardSentence,
        color: 'green lighten-1',
        icon: 'mdi-buffer',
        time: Helper.getNowTime(),
      };
      const sendData:sendUpdateCard = { fieldId: this.$accessor.setData.viewFieldId, item: item };
      this.$accessor.setData.addCardAction(sendData);
      this.addCardTitle = '';
      this.addCardSentence = '';
      this.dialog = false;
    }
  },
})
</script>