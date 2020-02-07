<template>
    <div class="wrapper">
        <app-stock v-for="(stockLoop, index) in stocks" :propStocks="stockLoop"></app-stock>
    </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
    components: {
        appStock: Stock
    },

    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
};
</script>

<style  scoped>
h5 {
    padding: 10px;
    font-size: small;
}

.wrapper {
    display: flex;
    height: 300px;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
