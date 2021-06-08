<template>
  <div class="row align-items-center text-muted p-2">
    <a href="/" class="cn_col"><img src="@/assets/icons/logo.png" width="25"/></a>
    <span class="cn_col"> > </span>
    <a href="/cryptocurrency" class="cn_col">Cryptocurrencies</a>
    <span class="cn_col"> > </span>
    <span class="cn_col">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "CryptoNavigation",
  props: {
    name: {type: String, required: true}
  }
}
</script>

<style>
.cn_col{
  margin-right: 10px;
}
</style>
