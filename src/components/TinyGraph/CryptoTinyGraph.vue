<template>
<div class="tiny_graph">
<svg width="135" height="50" viewBox="0 0 135 50"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <polyline v-bind:points="dataPoints" fill="none" v-bind:stroke="stroke_color" stroke-width="1.25" preserveAspectRatio="none"/>
</svg>
</div>
</template>

<script>

export default {
  name: 'CryptoTinyGraph',
  components: {},
  props: {
    pointList: Array,
    lastPoint: Number,
  },
  data () {
    return {
      stroke_color: "",
      dataPoints: [],

    }
  },
  computed: {
  },
  methods: {
    setPoints() {
      if (!this.pointList)
        return

      var tmpList = this.pointList
      if (this.lastPoint)
        tmpList.push(this.lastPoint)

      let len = tmpList.length;
      if (len === 0)
        return

      let min_close = Math.min(...tmpList)
      let max_close = Math.max(...tmpList)
      let width = 135
      let height = 50


      var points = ""
      for (var i = 0; i < len; i++) {
        var x = (i * width) / len
        var y = ((max_close - tmpList[i]) * height) / (max_close - min_close)
        points += x+", "+y+" "
      }
      this.dataPoints = points

      if (tmpList[len-1] > tmpList[0])
        this.stroke_color = "#2eb85c"
      else if (tmpList[len-1] < tmpList[0])
        this.stroke_color = "#e55353"
      else
        this.stroke_color = "#4f5d73"
    }

  },
  created() {
    this.setPoints()
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
