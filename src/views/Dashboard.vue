<template>
  <div>
    <CardIndiceGeneral/>
    <CardStockGeneral/>
  </div>
</template>

<script>
import { CardIndiceGeneral } from '@/components/CardIndiceGeneral'
import { CardStockGeneral } from '@/components/CardStockGeneral'

export default {
  name: 'Home',

  components: {
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
