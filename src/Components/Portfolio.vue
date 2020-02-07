<template>
    <div class="wrapper">
        <appStockInPortfolio v-for="(stockLoop, index) in stocks" :propStocks="stockLoop"></appStockInPortfolio>
    </div>
</template>

<script>
import StockInPortfolio from "./StockInPortfolio";

export default {
    components: {
        appStockInPortfolio: StockInPortfolio
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

