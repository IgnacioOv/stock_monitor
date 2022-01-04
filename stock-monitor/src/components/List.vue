<template>
  <ul>
    <li><h3>Tus acciones</h3></li>
    <li v-for="(ticker, index) in tickers" v-bind:key="index">{{ ticker }}</li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    tickers: Array,
  },
};
</script>

<style>
ul {
  text-align: left;
}
li {
  padding: 0.5vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  list-style: none;
}
</style>
