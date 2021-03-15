<template>
  <section class="l-section">
  <div class="content">
    <v-row>
      <v-col
        class="d-flex"
        cols="12"
        sm="12"
      >
        <v-card
          class="mx-auto mb-2 content__header"
          max-width="1280"
          width="100%"
        >
        <v-row>
          <v-col
            class="d-flex"
            cols="12"
            sm="3"
          >
            <v-card-text>
              <div>Word of the Day</div>
              <div class="text--primary">選択フィールド</div>
            </v-card-text>
          </v-col>
          <v-col
            class="d-flex"
            cols="12"
            sm="9"
          >
            <div class="l-box-10">
               <v-select
                 :items="field_data"
                 :label="$accessor.setData.reversedFieldData[0].category"
                 @change="selectField($event)"
                 item-text="category"
                 item-value="id"
                 dense
                 solo
               >
               </v-select>
            </div>
           </v-col>
           <div class="btn-box">
             <v-btn
               icon
               @click="fadeAction"
             >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
           </div>
          </v-row>
          <v-expand-transition>
            <div v-show="show" class="category-box">
              <v-divider></v-divider>
              <v-card-title>
                カテゴリーの追加 <span class="small">上での選択項目が増え別のフィールドでカスタマイズが形成可能です。</span>
              </v-card-title>
             <v-row>
               <v-col
                 cols="12"
                 md="4"
               >
                 <v-text-field
                   v-model="addCategory"
                   :rules="[v => !!v || 'Name is required',v => v.length <= 10 || 'Name must be less than 10 characters',]"
                   :counter="10"
                   label="カテゴリー名"
                   required
                 ></v-text-field>
               </v-col>

               <v-col
                 cols="12"
                 md="4"
               >
                 <v-text-field
                   v-model="addSlug"
                   :rules="[v => !!v || 'Name is required',v => v.length <= 10 || 'Name must be less than 10 characters',]"
                   :counter="10"
                   label="Slug"
                   required
                 ></v-text-field>
               </v-col>
               <v-col
                 cols="12"
                 md="4"
               >
                  <v-btn
                    color="cyan darken-2"
                    class="white--text"
                    @click="addCategoryAction"
                  >
                    追加する
                  </v-btn>
               </v-col>
             </v-row>

            </div>
          </v-expand-transition>
　 　　　 </v-card>
      </v-col>
    </v-row>
    <div class="content__body">
      <ContentTime />
    </div>
  </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ContentTime from '~/components/ContentTime.vue'

export default Vue.extend({
  components: {
    ContentTime
  },
  data() {
    return {
      show: false,
      title: 'title',
      addCategory: '',
      addSlug: '',
      fieldDataNumber: 0
    }
  },
  computed: {
    field_data: {
      get(){
        return this.$accessor.setData.reversedFieldData ? this.$accessor.setData.reversedFieldData : [];
      },
      set(value){
        return value
      }
    },
    set_field_data(){
      this.field_data = this.$accessor.setData.reversedFieldData
    },
  },
  watch: {
    field_data: function(){
      this.field_data = this.$accessor.setData.reversedFieldData
    }
  },
  methods: {
   fadeAction(){
     this.show = !this.show
   },
   selectField(id:number){
     this.$accessor.setData.selectViewField(Number(id));
   },
   addCategoryAction(){
     const idNumber = this.$accessor.setData.reversedFieldData.length + 1;
     const __item = {
       id: idNumber,
       category: this.addCategory,
       slug: this.addSlug,
     }
     this.$accessor.setData.addFieldAction(__item);
     this.addCategory = '追加しました。';
     this.addSlug = '追加しました。';
   }
  },
})
</script>
