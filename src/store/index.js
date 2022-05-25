import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kaffe: [
      {
        id: 1,
        name: "BryggKaffe",
        price: 49,
        desc: "Bryggd på månadens bönor",
        amount: 1,
        bean:'Arabica'

      },
      {
        id: 2,
        name: "Caffe Dopio",
        price: 49,
        desc: "Bryggd på månadens bönor",
        amount: 1,
        bean:'Liberica'
      },
      {
        id: 3,
        name: "Cappucino",
        price: 49,
        desc: "Bryggd på månadens bönor",
        amount: 1,
        bean:'Robusta'

      },
      {
        id: 4,
        name: "Latte Machiato ",
        price: 49,
        desc: "Bryggd på månadens bönor",
        amount: 1,
        bean:'Arabica'
      },
      {
        id: 5,
        name: "Kaffe Latte ",
        price: 49,
        desc: "Bryggd på månadens bönor",
        amount: 1,
        bean:'Robusta'
      },
      {
        id: 6,
        name: "Cortado ",
        price: 39,
        desc: "Bryggd på månadens bönor",
        amount: 1,
        bean:'Liberica'
      }
    ],
    Order: [],
    User: [],
    History: [],
    cartItemCount: 0,

  },
  getters: {
    kaffe: state => {
      return state.kaffe;
    },
    order: state => {
      return state.Order;
    },
    user: state => {
      return state.User;
    },
    history: state => {
      return state.History;
    },
    getCoffeeByBean: (state) => (bean) => {
      return state.kaffe.filter(item => item.bean == bean)
    },
  },
  mutations: {
    Add_Order(state, payload) {
      let nameObj = state.Order.find(element => element.name == payload.name)
      if (nameObj) {
        nameObj.amount += 1
      }
      else {

        state.Order.push(payload)
      }state.cartItemCount++
    },
    Add_User(state, k) {
      state.User.push(k)
    },
    Add_Hist(state, k) {
      state.History.push(k)
    },
    addToCart(state, payload) {

      let item = payload;
      item = { ...item, quantity: 1 }  /* var = sig själv + yteriligare egenskap med värdet 1*/
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some(i => i.id == item.id)
        if (bool) {
          let itemIndex = state.cartItems.findIndex(el => el.id === item.id)
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item)
        }
      } else {
        state.cartItems.push(item)

      }
      state.cartItemCount++

    },
    setCart(state, payload) {
      state.cartItems = payload;


    },
   
  },
  actions: {
  },
  modules: {
  }
})
