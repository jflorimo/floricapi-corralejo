<template>
  <div>
    <CContainer>
      <CRow class="text-muted">{{ coinData.name }} ({{coinData.symbol}})</CRow>
      <CRow class="align-middle">
        <h2>$36,150.26</h2>
        <span class="badge badge-success h6 pt-2"><FontAwesomeIcon :icon="['fa', 'caret-up']" size="lg"/>1.67%</span>
      </CRow>
      <CRow>Low: $35,304.58 (24h)</CRow>
      <CRow>High: $36,790.57</CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: "CryptoPriceDetail",
  props: {coinData: Object}
}
</script>

<style>
</style>
