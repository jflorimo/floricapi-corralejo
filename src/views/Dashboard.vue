<template>
  <div>
    <CardIndiceGeneral/>
    <CardStockGeneral/>
  </div>
</template>

<script>
import { CardIndiceGeneral } from '@/views/capi/CardIndiceGeneral'
import { CardStockGeneral } from '@/views/capi/CardStockGeneral'

export default { 
  name: 'Home',

  components: {
    CardIndiceGeneral,
    CardStockGeneral
  },

  data () { 
    return {
     
    } 
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