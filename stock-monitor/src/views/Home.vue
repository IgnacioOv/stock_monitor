<template>
  <div class="home">
    <h1>Dashboard</h1>

    <List v-bind:tickers="tickers" />
  </div>
</template>

<script>
import List from "@/components/List.vue";
export default {
  name: "Home",
  data: function () {
    return {
      tickers: [
        "ADBE",
        "AMD",
        "GOOG",
        "GOOGL",
        "AMZN",
        "AAPL",
        "ASML",
        "AVGO",
        "CSCO",
        "CMCSA",
        "EBAY",
        "HSIC",
        "INTC",
        "MSFT",
        "VRSK",
        "PYPL",
      ],
    };
  },
  components: {
    List,
  },
};
</script>
