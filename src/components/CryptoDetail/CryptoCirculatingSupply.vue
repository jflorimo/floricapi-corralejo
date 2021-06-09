<template>
  <div>
  <h6 class="text-muted">Circulating Supply <FontAwesomeIcon :icon="['fa', 'info-circle']"/></h6>
    <ul>
      <li><strong>max_supply</strong>: {{coinData.max_supply}}</li>
      <li><strong>circulating_supply</strong>: {{coinData.circulating_supply}}</li>
      <li><strong>total_supply</strong>: {{coinData.total_supply}}</li>
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
.card{
  background-color: #F8FDFA;
}
</style>
