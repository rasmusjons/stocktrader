<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link to="/">
                <a class="navbar-brand" href="#">Stock Trading</a>
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/portfolio">
                            <a class="nav-link" href="#">
                                Portfolio
                                <span class="sr-only">(current)</span>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/stocks">
                            <a class="nav-link" href="#">Stocks</a>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <a @click="randomizeStocks" class="nav-link" href="#">End day</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >Save & Load</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <button class="dropdown-item" href="#">Save</button>
                            <button class="dropdown-item" href="#">Load</button>
                        </div>
                    </li>
                </ul>
            </div>
            <span class="founds">{{ founds }} $</span>
        </nav>

        <div class="tcontainer">
            <div class="ticker-wrap">
                <div class="ticker-move">
                    <div class="ticker-item">{{ stocks[0].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[1].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[2].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[3].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[0].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[1].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[2].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[3].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[0].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[1].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[2].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[3].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[0].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[1].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[2].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[3].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[0].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[1].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[2].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[3].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[0].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[1].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[2].name }}, price: {{stocks[0].price}}</div>
                    <div class="ticker-item">{{ stocks[3].name }}, price: {{stocks[0].price}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "app",
    data() {
        return {};
    },
    methods: {
        endDay() {
            console.log("endday");
        },
        ...mapActions(["randomizeStocks"])
    },
    computed: {
        founds() {
            return this.$store.state.founds;
        },
        stocks() {
            return this.$store.getters.stocks;
        }
    }
};
</script>

<style scoped>
.founds {
    float: right;
    color: gold;
}

.slider {
    display: inline-flex;
    width: 100%;
    color: rgb(244, 200, 100);
    background: grey;
    height: 25px;
}

@keyframes ticker {
    0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-100%, 0, 0);
    }
}
.tcontainer {
    width: 100%;
    overflow: hidden;
    color: rgb(244, 200, 100);
}
.ticker-wrap {
    width: 100%;
    padding-left: 100%;
    background-color: #343a40;
}
.ticker-move {
    display: inline-block;
    white-space: nowrap;
    padding-right: 100%;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ticker;
    animation-duration: 90s;
    background: #343a40;
}
.ticker-move:hover {
    animation-play-state: paused;
}
.ticker-item {
    display: inline-block;
    padding: 0 2rem;
    background: #343a40;
    font-size: small;
}
</style>
