<template>
    <div class="jumbotron">
        <h1 class="display-4">Trade Stocks!</h1>
        <p class="lead">You may Save or Load your data.</p>
        <hr class="my-4" />
        <p>Click on "End Day" to begin an new trading day.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Your Founds: {{ founds }} $</a>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            msg: "home"
        };
    },
    computed: {
        founds() {
            return this.$store.state.founds;
        }
    }
};
</script>

<style>
.btn-primary:hover {
    background-color: #007bff;
}
</style>
