import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: '',
    userID:0,
    cartIdList: [],
    search:'',
  },
  getters: {
  },
  mutations: {
    setUser (state, user) {
      state.username = user.name
      state.userID = parseInt(user.ID)
    },
    setSearch(state, search){
      state.search = search
    },
    setCartIdList(state,cartIdList){
      state.cartIdList=cartIdList
    },
    deleteCartIdList(state,ID){
      for(let i in state.cartIdList){
        console.log(state.cartIdList+ " " + ID)
        if(state.cartIdList[i]===ID) {
          state.cartIdList.splice(i, 1)
          return
        }
      }
    },
    addCart(state,ID){
      for(let i in state.cartIdList){
        if(ID === state.cartIdList[i]){
          state.cartIdList[i]=ID
          return
        }
      }
      state.cartIdList.push(ID)
      console.log(state.cartIdList.length)
    }
  },
  actions: {

  }
})

export default store
