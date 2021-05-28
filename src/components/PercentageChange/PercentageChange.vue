<template>
   <span :style="class_color"> {{ get_x_day_percentage_change() }} %</span>
</template>

<script>

export default {
  name: 'PercentageChange',
  props: { 
    market: Object,
    compared_to_x_day_ago: Number, 
  },
  data () {
    return {
      class_color: 'color: #4f5d73',
    }
  },
  methods: {
    get_x_day_percentage_change(){

      var compared_to_price = this.market.last_close
      if (this.compared_to_x_day_ago === 7)
        compared_to_price = this.market.week_ago_close

      // see https://coreui.io/docs/utilities/colors/#color for colors
      if (this.market.current_price === compared_to_price)
      {
        this.class_color = 'color: #4f5d73'; // default table text color
        return 0.0
      }

      var diff = 0.0
      if (this.market.current_price < compared_to_price)
        diff = this.market.current_price - compared_to_price
      else
        diff = -1 * (compared_to_price - this.market.current_price)

      if (diff < 0)
        this.class_color = 'color: #e55353'; // red
      else
        this.class_color = 'color: #2eb85c'; // green 

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