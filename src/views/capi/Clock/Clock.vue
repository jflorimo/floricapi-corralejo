<template>
  <span>{{ time }} <CIcon :style="getStockColor()" :content="clockIcon"/></span>   
</template>

<script>
import moment from 'moment-timezone'
import { cilClock } from '@coreui/icons'

export default {
  name: 'Clock',
  props: { timezone: String, open: String, close: String },
  data () {
    return {
      time: '',
      refresh_interval: 5 * 1000,
      clockIcon: cilClock,
    }
  },
  methods: {
    getStockColor() {
      var to_sec = function(t){
        return t.seconds() + (t.minutes() * 60) + (t.hours() * 60 * 60);
      }

      var color = "color:#3c4b64" // default
      if( this.open && this.close ){
        let now = to_sec(moment());
        var open = to_sec(moment(this.open));
        var close = to_sec(moment(this.close));

        if (now >= open && now <= close)
          color = "color:#2eb85c" // green
        else
          color = "color:#e55353" // red
      }
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
    this.clockInterval = setInterval(this.setTime, this.refresh_interval)
  },
  beforeDestroy () {
    clearInterval(this.clockInterval)
  }
}
</script>

<style scoped>
</style>