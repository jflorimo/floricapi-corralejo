<template>
  <div class="row align-items-center">
    <Cryptoicon :symbol="symbol" :size="34" class="cni_cumstom"/>
    <h2 class="cni_cumstom">{{ this.name }}</h2>
    <FavoriteStar :filled="false" class="cni_cumstom"/>
  </div>
</template>

<script>
import FavoriteStar from "@/components/FavoriteStar/FavoriteStar";
export default {
  name: "CryptoNameIcon",
  components: {FavoriteStar},
  props: {
    name: {type: String, required: true},
    symbol: {type: String, required: true},
  },
  mounted() {
    console.log("MOUNTED: " + this.symbol)
  }
}
</script>

<style scoped>
.cni_cumstom {
  margin: 10px;
}
</style>
