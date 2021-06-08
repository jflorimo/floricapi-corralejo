<template>
  <div>
    Price Change
    <ul>
      <li>percent_change_1h: {{coinData.percent_change_1h}}</li>
      <li>percent_change_24h: {{coinData.percent_change_24h}}</li>
      <li>percent_change_7d: {{coinData.percent_change_7d}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CryptoPriceChange",
  props: {
    coinData: {type: Object, required: true}
  }
}
</script>

<style>

</style>
