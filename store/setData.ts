import { getterTree, mutationTree, actionTree } from 'typed-vuex';
import { FieldData,MethodCrad,sendUpdateCard } from './interfaces'
import { ApiFetchGet } from '~/api/http-client'

export const state = () => ({
  viewFieldId: 1,
  fieldData: [
    {id: 1,category: "改善方法",slug: 'improvement'}
  ],
  fieldItems: [
    {
      slug: 'customize',
      fieldId: 1,
      cardItems: [
        {
          id: 1,
          title: "実行",
          text: '計画を解決できない場合は、図にしてプロセス化してフローを確認する。',
          color: 'red lighten-2',
          icon: 'mdi-star',
          time: '20210102'
        },
        {
          id: 2,
          title: "観察方法の解析",
          text: '意味を通常よりも物理的な概念から考える。',
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          time: '20210102'
        },
        {
          id: 3,
          title: "定量分析化",
          text: '既に数字にしている内容も測定環境から考える。',
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          time: '20210102'
        },
        {
          id: 4,
          title: "意味構成に複数の視点を加える",
          text: '情報を理解する環境を別の環境因子から評価する。',
          color: 'indigo',
          icon: 'mdi-buffer',
          time: '20210102'
        }
      ]
    }
  ]
})

export const getters = getterTree(state, {
  viewFieldData(state){
    return state.viewFieldId
  },
  reversedFieldData(state){
    return state.fieldData
  },
  reversedCard(state){
    return state.fieldItems
  }
})

export const mutations = mutationTree(state, {
  selectViewField(state, viewid:number) {
    state.viewFieldId = viewid;
  },
  addField(state, data:FieldData) {
    state.fieldData.push(data);
    state.fieldItems.push({
      slug: data.category,
      fieldId: data.id,
      cardItems: []
    })
    console.log(state.fieldItems)
  },
  updateField(state, data:FieldData) {
    state.fieldData.push(data);
    state.fieldData = state.fieldData.filter( v => v );
  },
  addCard(state, data:sendUpdateCard) {
    const setId = data.fieldId - 1;
    state.fieldItems.map( (item,index) => {
      if(item.fieldId === data.fieldId){
        item.cardItems.push(data.item);
        item.cardItems = item.cardItems.filter( v => v );
      }
    })
  },
  updateCard(state, data:MethodCrad) {
    let items:MethodCrad[] = state.fieldItems[state.viewFieldId-1].cardItems
    items = items.map( (item,index) => {
      if( item.id === data.id ){
        return data
      }
      return item
    });
    console.log(items)
    state.fieldItems[state.viewFieldId-1].cardItems = items;
  },
  deleteCard(state, id:number) {
    const items = state.fieldItems[(state.viewFieldId-1)].cardItems
    let sendItem:MethodCrad[] = []
    items.map( (item,index) => {
      if(item.id !== id){
        sendItem.push(item)
      }
    });
    state.fieldItems[state.viewFieldId-1].cardItems = sendItem
  },
})

export const actions = actionTree({ state,getters,mutations},{
  selectViewFieldAction(context,viewId:number) {
    context.commit('selectViewField', viewId);
  },
  getAction(context):void {
    const FetachD = new ApiFetchGet('https://opendata.resas-portal.go.jp/api/v1/prefectures')
    FetachD.init().then(res => {
      const data = res.result
    });
  },
  addFieldAction(context,data:FieldData) {
    context.commit('addField', data);
  },
  updateFieldAction(context,data:FieldData) {
    context.commit('updateField', data);
  },
  addCardAction(context,data:sendUpdateCard) {
    context.commit('addCard', data);
  },
  deleteCardAction(context,id:number) {
    context.commit('deleteCard', id);
  },
  updateCardAction(context,data:MethodCrad) {
    context.commit('updateCard', data);
  }
})

