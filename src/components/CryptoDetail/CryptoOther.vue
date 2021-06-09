<template>
<div>
  <h6 class="text-muted">Other intformation <FontAwesomeIcon :icon="['fa', 'info-circle']"/></h6>
  <ul>
    <li><strong>market_cap</strong>: {{coinData.market_cap}}</li>
    <li><strong>last_updated</strong>: {{coinData.last_updated}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "CryptoOther",
  props: {
    coinData: {type: Object, required: true}
  }
}
</script>

<style>

</style>
