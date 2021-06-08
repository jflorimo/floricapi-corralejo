<template>
  <div>
    Volume (24h)
    <ul>
      <li>volume_24h: {{coinData.volume_24h}}</li>
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
