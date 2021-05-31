<template>
  <div>
    <CardCryptoGeneral/>
    <CardIndiceGeneral/>
    <CardStockGeneral/>
  </div>
</template>

<script>
import { CardCryptoGeneral } from "@/components/CardCryptoGeneral";
import { CardIndiceGeneral } from '@/components/CardIndiceGeneral'
import { CardStockGeneral } from '@/components/CardStockGeneral'

export default {
  name: 'Home',

  components: {
    CardCryptoGeneral,
    CardIndiceGeneral,
    CardStockGeneral
  },

  data () {
    return {}
  },

  computed: {
  },

  methods: {
  },

  created() {
  },

  mounted() {
  },

  beforeDestroy () {
  }
}

</script>

<style scoped>
</style>
