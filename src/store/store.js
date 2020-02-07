import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    stocks: [
      { id: 0, name: "Google", price: 100, owned: 100 },
      { id: 1, name: "Apple", price: 1, owned: 10 },
      { id: 2, name: "Tesla", price: 100, owned: 0 },
      { id: 3, name: "Volvo", price: 100, owned: 0 }
    ],
    founds: 1000
  },
  mutations: {
    SELL_STOCKS(state, payload) {
      let quantity = parseInt(payload.quantity);

      state.stocks[payload.id].owned -= quantity;
      state.founds += payload.price * quantity;
    },
    RANDOM_STOCKS(state) {
      for (let i = 0; i < state.stocks.length; i++) {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        let randomNumber = Math.floor(Math.random() * 7) * plusOrMinus;
        if (state.stocks[i].price + randomNumber > 0) {
          state.stocks[i].price += randomNumber;
        } else {
          state.stocks[i].price = 0;
        }
      }
    },

    BUY_STOCKS(state, payload) {
      console.log(payload);
      let quantity = parseInt(payload.quantity);
      state.stocks[payload.id].owned += quantity;
      state.founds -= payload.price * quantity;
    }
  },

  actions: {
    buyStock: ({ commit }, payload) => {
      console.log("action quantity: " + payload.quantity);
      console.log("action id " + payload.id);
      commit("BUY_STOCKS", payload);
    },
    sellStocks: ({ commit }, payload) => {
      console.log(payload);
      commit("SELL_STOCKS", payload);
    },
    randomizeStocks: ({ commit }) => {
      console.log("randomize stock");
      commit("RANDOM_STOCKS");
    }
  },

  getters: {
    stocks: state => {
      return state.stocks;
    },
    founds: state => {
      return state.founds;
    }
  }
});
