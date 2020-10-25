<template>
    <p>{{ time }} <CIcon :style="getMarketColor()" :content="clockIcon"/></p>   
</template>

<script>
import moment from 'moment-timezone'
import { cilClock } from '@coreui/icons'

export default {
  name: 'Clock',
  props: {timezone: String},
  data () {
    return {
      time: '',
      clockIcon: cilClock
    }
  },
  methods: {
    getMarketColor(market) {
      var color = ""
      if( market )
        color = "color:red"
      return color
    },
    formatTimeFromTimeZone(timeZone) {
      // see https://momentjs.com/timezone/ documentation
      var date = new Date().toUTCString()
      var time = moment.tz(date, timeZone)
      return time.format('HH:mm:ss')
    },
    setTime() {
      this.time = this.formatTimeFromTimeZone(this.timezone)
    },
  },
  mounted() {
    this.setTime()
    this.clockInterval = setInterval(this.setTime, 1000)
  },
  beforeDestroy () {
    clearInterval(this.clockInterval)
  }
}
</script>

<style scoped>
</style>