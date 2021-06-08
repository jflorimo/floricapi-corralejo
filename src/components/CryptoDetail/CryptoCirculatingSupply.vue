<template>
  <div>
    Circulating Supply
    <ul>
      <li>max_supply: {{coinData.max_supply}}</li>
      <li>circulating_supply: {{coinData.circulating_supply}}</li>
      <li>total_supply: {{coinData.total_supply}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "CryptoCirculatingSupply",
  props: {
    coinData: {type: Object, required: true}
  }
}
</script>

<style>
</style>
