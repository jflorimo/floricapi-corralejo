<template>
  <div>
    <CardIndiceGeneral/>
    <CardStockGeneral/>
  </div>
</template>

<script>
import { CardStockGeneral } from '@/views/capi/CardStockGeneral'

export default { 
  name: 'Stock',

  components: {
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