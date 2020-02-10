import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    stocks: [
      { id: 0, name: "Google", price: "", owned: 0 },
      { id: 1, name: "Apple", price: "", owned: 0 },
      { id: 2, name: "Tesla", price: "", owned: 0 },
      { id: 3, name: "The Cheesecake Factory", price: "", owned: 0 }
    ],
    founds: 10000
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
          state.stocks[i].price.toFixed(2);
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
    },
    SAVE(state) {
      axios
        .post("https://stocktrader-ca054.firebaseio.com/log.json", state)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    LOAD(state) {
      axios
        .get("https://stocktrader-ca054.firebaseio.com/log.json", state)
        .then(res => {
          const data = res.data;
          const states = [];
          for (let key in data) {
            const state = data[key];
            state.id = key;
            states.push(state);
          }
          console.log(states);
          state.founds = states[states.length - 1].founds;
          state.stocks = states[states.length - 1].stocks;
        })
        .catch(error => console.log(error));
    },

    GET_DATA(state) {
      console.log(state);

      let data = {
        url: "https://financialmodelingprep.com/api/v3/stock/real-time-price",

        loaded: false,
        searchQuery: ""
      };
      axios

        .get(data.url)
        .then(response => {
          let myStockList = [];
          for (let i = 0; i < response.data.stockList.length; i++) {
            if (response.data.stockList[i].symbol === "GOOGL") {
              myStockList.push(response.data.stockList[i]);
              console.log(myStockList);
            }
            if (response.data.stockList[i].symbol === "AAPL") {
              myStockList.push(response.data.stockList[i]);
              console.log(myStockList);
            }
            if (response.data.stockList[i].symbol === "TSLA") {
              myStockList.push(response.data.stockList[i]);
              console.log(myStockList);
            }
            if (response.data.stockList[i].symbol === "CAKE") {
              myStockList.push(response.data.stockList[i]);
              console.log(myStockList);
            }
          }
          state.stocks[0].price = myStockList[0].price;
          state.stocks[1].price = myStockList[1].price;
          state.stocks[2].price = myStockList[2].price;
          state.stocks[3].price = myStockList[3].price;
        })
        .catch(error => {
          console.log(error);
        });
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
    },
    save: ({ commit }) => {
      console.log("save action");
      commit("SAVE");
    },
    load: ({ commit }) => {
      console.log("load action");
      commit("LOAD");
    },
    getData: ({ commit }) => {
      console.log("getData action");
      commit("GET_DATA");
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
