import { getAccessorType, getterTree, mutationTree, actionTree } from 'typed-vuex';
import * as setData from './setData';

export const state = () => ({
  message: ""
})

export const getters = getterTree(state, {
  reversedMesage(state){
    return state.message.split('').reverse().join('')
  }
})

export const mutations = mutationTree(state, {
  updateMsg(state, newMessage:string) {
    state.message = newMessage
  },
})

export const actions = actionTree({ state,getters,mutations},{
  updateMsgAction(context, newMessage:string):void {
    this.app.$accessor
  },
  anotherUpdateMsgAction(context,newMessage:string):void {
    context.commit('updateMsg', newMessage)
  }
})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    setData
  },
})
