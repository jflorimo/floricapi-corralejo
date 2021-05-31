<template>
  <router-view></router-view>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'App',
  methods: {
    ...mapActions({
      updateTokenValidity: "accounts/updateTokenValidity",
      fetch_crypto_summary: "crypto/fetch_crypto_summary",
    }),
  },
  created() {
    this.updateTokenValidity()
    this.fetch_crypto_summary()
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
