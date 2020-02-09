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

                    <li class="nav-item" id="endDay">
                        <router-link to="#">
                            <a @click="randomizeStocks" class="nav-link" href="#">End day</a>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown" id="saveLoad">
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
                            <button @click="save" class="dropdown-item" href="#">Save</button>
                            <button @click="load" class="dropdown-item" href="#">Load</button>
                        </div>
                    </li>
                </ul>
            </div>
            <span class="founds">{{ founds }} $</span>
        </nav>
        <appTicker :propStocks="stocks"></appTicker>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Ticker from "./Ticker";

export default {
    name: "app",
    data() {
        return {};
    },
    methods: {
        endDay() {
            console.log("endday");
        },
        ...mapActions(["randomizeStocks", "save", "load"])
    },
    computed: {
        founds() {
            return this.$store.state.founds;
        },
        stocks() {
            return this.$store.getters.stocks;
        }
    },
    components: {
        appTicker: Ticker
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

#endDay {
    border: dotted 1px rgba(123, 118, 118, 0.87);
    border-radius: 10px;
}

#endDay a {
    text-decoration: none;
}
#saveLoad {
    border: dotted 1px rgba(123, 118, 118, 0.87);
    border-radius: 10px;
}
</style>
