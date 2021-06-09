<template>
  <div>
    <h6 class="text-muted">Price Change <FontAwesomeIcon :icon="['fa', 'info-circle']"/></h6>
    <ul>
      <li><strong>percent_change_1h</strong>: {{coinData.percent_change_1h}}</li>
      <li><strong>percent_change_24h</strong>: {{coinData.percent_change_24h}}</li>
      <li><strong>percent_change_7d</strong>: {{coinData.percent_change_7d}}</li>
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
