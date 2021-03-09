<template>
   <span :style="class_color"> {{ get_24h_percentage_change() }} %</span>
</template>

<script>

export default {
  name: 'PercentageChange',
  props: {market: Object},
  data () {
    return {
      class_color: 'color: #4f5d73',
    }
  },
  methods: {
    get_24h_percentage_change(){
      // see https://coreui.io/docs/utilities/colors/#color for colors

      if (this.market.current_price === this.market.last_close)
      {
        this.class_color = 'color: #4f5d73'; // default table text color
        return 0.0
      }

      var diff = 0.0
      if (this.market.current_price < this.market.last_close)
      {
        this.class_color = 'color: #e55353'; // red 

        diff = this.market.current_price - this.market.last_close
      }
      else
      {
        this.class_color = 'color: #2eb85c'; // green 
        diff = -1 * (this.market.last_close - this.market.current_price)
      }
      return ((diff / this.market.current_price) * 100).toFixed(2)
    },
    
  },
  mounted() {
  },
  beforeDestroy () {
  }
}
</script>

<style scoped>

</style>