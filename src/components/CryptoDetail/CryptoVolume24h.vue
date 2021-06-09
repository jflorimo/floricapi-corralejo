<template>
  <div>
    <h6 class="text-muted">Volume (24h) <FontAwesomeIcon :icon="['fa', 'info-circle']"/></h6>
    <ul>
      <li><strong>volume_24h</strong>: {{coinData.volume_24h}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CryptoVolume24h",
  props: {
    coinData: {type: Object, required: true}
  }
}
</script>

<style>

</style>
