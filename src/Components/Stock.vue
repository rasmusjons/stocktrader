<template>
  <div>
    <form v-on:click.prevent>
      <div class="form-group">
        <label
          >Name: {{ propStocks.name }} & Price: {{ propStocks.price }}</label
        >
        <input type="number" min="0" class="form-control" v-model="quantity" />
        <button
          class="btn btn-primary"
          @click.prevent="
            buyStock({
              quantity: quantity,
              id: propStocks.id,
              price: propStocks.price
            })
          "
          typ="button"
          :disabled="quantity <= 0 || founds - quantity * propStocks.price <= 0"
        >
          Buy
        </button>
        <h5>Currently owned: {{ propStocks.owned }}</h5>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  props: ["propStocks"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions(["buyStock"])
  },
  computed: {
    founds() {
      return this.$store.getters.founds;
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 40px;
  margin: 5px;
  width: 400px;
  background-color: aliceblue;
  padding: 12px;
  border-radius: 3px;
}
label {
  background-color: #007bff;
  color: white;
  border-radius: 3px;
  width: 100%;
  padding: 5px;
}
form button {
  float: right;
  margin: 10px;
}
h5 {
  padding: 10px;
  font-size: small;
}
</style>
