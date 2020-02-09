<template>
    <div>
        <form v-if="propStocks.owned >0">
            <div class="form-group">
                <label>Name: {{ propStocks.name }} & Price: {{propStocks.price }}</label>
                <input type="number" min="0" class="form-control" v-model="quantity" />
                <button
                    @click="sellStocks({quantity: quantity, id: propStocks.id, price: propStocks.price})"
                    class="btn btn-primary"
                    :disabled="propStocks.owned <=0 || (propStocks.owned - quantity) < 0 "
                >Sell</button>
                <h5>Owned: {{ propStocks.owned }}</h5>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    props: ["propStocks"],

    data() {
        return {
            quantity: 0
        };
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        },
        founds() {
            return this.$store.getters.founds;
        }
    },
    methods: {
        ...mapActions(["sellStocks"])
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
    background-color: goldenrod;
    color: white;
    border-radius: 3px;
    width: 100%;
    padding: 5px;
}

form button {
    float: right;
    margin: 10px;
}

.btn-primary {
    background-color: goldenrod;
    border: 0;
}
h5 {
    padding: 10px;
    font-size: small;
}
</style>
