<template>
<div class="tiny_graph">
<svg width="135" height="50" viewBox="0 0 135 50" 
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <polyline v-bind:points="pointList" fill="none" v-bind:stroke="stroke_color" stroke-width="1.25" preserveAspectRatio="none"/>
</svg>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TinyGraph',
  components: {},
  props: {
    marketId: Number,
  },
  data () {
    return {
      pointList: "",
      stroke_color: "",
    }
  },
  computed: {
    ...mapState('capi_get', ['stock_last_7_days_close']),
  },
  methods: {
    setPoints() {
      let price_list = this.stock_last_7_days_close[this.marketId]["price_list"]
      let len = price_list.length;

      if (len === 0)
        return

      let min_close = this.stock_last_7_days_close[this.marketId]["min"]
      let max_close = this.stock_last_7_days_close[this.marketId]["max"]
      let width = 135
      let height = 50


      var points = ""
      for (var i = 0; i < len; i++) {
        var x = (i * width) / len
        var y = ((max_close - price_list[i]) * height) / (max_close - min_close)
        points += x+", "+y+" "
      }
      this.pointList = points

      if (price_list[len-1] > price_list[0])
        this.stroke_color = "#2eb85c"
      else if (price_list[len-1] < price_list[0])
        this.stroke_color = "#e55353"
      else
        this.stroke_color = "#4f5d73"
    }
    
  },
  created() {
    this.$store.dispatch('capi_get/fetch_graph', this.marketId).then(() => {
      this.setPoints()
    })
  },
  mounted() {},
  beforeDestroy () {},
}
</script>

<style>
.tiny_graph {
  width: 135px;
  height: 50px;
}
</style>