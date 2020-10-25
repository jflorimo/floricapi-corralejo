<template>
  <CChartLine class="custom-chart"
    :datasets="marketDataPoints"
    :options="computedOptions"/>
</template>

<script>
import { mapState } from 'vuex'
import { CChartLine } from '@coreui/vue-chartjs'

export default {
  name: 'TinyGraph',
  components: { CChartLine },
  props: {
    marketId: Number,
  },
  data () {
    return {
      marketDataPoints: []
    }
  },
  computed: {
    ...mapState('capi', ['market_last_7_points']),
    computedOptions () {
      return {
        scales: {
          xAxes: [{
            display: false,
            offset: true,
            ticks: { display: false },
          }],
          yAxes: [{
            display: false,
            offset: true,
            ticks: { display: false },
          }]
        },
        elements: {
          line: {
            borderWidth: 3
          },
          point: {
            radius: 3,
            hitRadius: 10,
            hoverRadius: 4,
          }
        },
        legend: { display: false },
        tooltips: { enabled: true, displayColors: false },
        maintainAspectRatio: false,
        responsive: false,
        // animation: { duration: 0 }, // general animation time
        // hover: { animationDuration: 0 }, // duration of animations when hovering an item
        // responsiveAnimationDuration: 0, // animation duration after a resize
      }
    },
  },
  methods: {
    preparedGraphDataSet () {
      return {
        data: [],
        backgroundColor: 'transparent',
        borderColor: 'orange',
        pointBorderColor: 'orange',
        pointBackgroundColor: 'orange',
      }
    },
    setDataMarketGraph() {
      var data = [0, 0, 0, 0, 0, 0, 0]
      if (this.market_last_7_points[this.marketId])
        data = this.market_last_7_points[this.marketId]['value']
      var res = this.preparedGraphDataSet()
      res['data'] = data
      this.$set(this.marketDataPoints, 0, res)
    },
  },
  created() {
    this.$store.dispatch('capi/fetch_daily_market_points', this.marketId).then(() => {
      this.setDataMarketGraph()
    })
  },
  mounted() {},
  beforeDestroy () {},
}
</script>

<style scoped>
</style>