<template>
  <div class="tcontainer">
    <div class="ticker-wrap">
      <div class="ticker-move">
        <div class="ticker-item">
          {{ propStocks[0].name }}, price: {{ propStocks[0].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[1].name }}, price: {{ propStocks[1].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[2].name }}, price: {{ propStocks[2].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[3].name }}, price: {{ propStocks[3].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[0].name }}, price: {{ propStocks[0].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[1].name }}, price: {{ propStocks[1].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[2].name }}, price: {{ propStocks[2].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[3].name }}, price: {{ propStocks[3].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[0].name }}, price: {{ propStocks[0].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[1].name }}, price: {{ propStocks[1].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[2].name }}, price: {{ propStocks[2].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[3].name }}, price: {{ propStocks[3].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[0].name }}, price: {{ propStocks[0].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[1].name }}, price: {{ propStocks[1].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[2].name }}, price: {{ propStocks[2].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[3].name }}, price: {{ propStocks[3].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[0].name }}, price: {{ propStocks[0].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[1].name }}, price: {{ propStocks[1].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[2].name }}, price: {{ propStocks[2].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[3].name }}, price: {{ propStocks[3].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[0].name }}, price: {{ propStocks[0].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[1].name }}, price: {{ propStocks[1].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[2].name }}, price: {{ propStocks[2].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[3].name }}, price: {{ propStocks[3].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[0].name }}, price: {{ propStocks[0].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[1].name }}, price: {{ propStocks[1].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[2].name }}, price: {{ propStocks[2].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[3].name }}, price: {{ propStocks[3].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[0].name }}, price: {{ propStocks[0].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[1].name }}, price: {{ propStocks[1].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[2].name }}, price: {{ propStocks[2].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[3].name }}, price: {{ propStocks[3].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[0].name }}, price: {{ propStocks[0].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[1].name }}, price: {{ propStocks[1].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[2].name }}, price: {{ propStocks[2].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[3].name }}, price: {{ propStocks[3].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[0].name }}, price: {{ propStocks[0].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[1].name }}, price: {{ propStocks[1].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[2].name }}, price: {{ propStocks[2].price }}
        </div>
        <div class="ticker-item">
          {{ propStocks[3].name }}, price: {{ propStocks[3].price }}
        </div>
       
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['propStocks']
}
</script>


<style scoped>
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

.ticker-item {
  display: inline-block;
  padding: 0 2rem;
  background: #343a40;
  font-size: small;
}
</style>
