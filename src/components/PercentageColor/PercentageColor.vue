<template>
    <span :style="get_color()"> {{ this.percentage_number }} %</span>
</template>

<script>
export default {
  name: "PercentageColor",
  props: {
    percentage_number: Number,
  },
  data () {
    return {
      red_color: 'color: #e55353', // red
      green_color: 'color: #2eb85c',// green
    }
  },
  methods: {
    get_color(){return (this.percentage_number > 0)? this.green_color : this.red_color}
  }
}
</script>

<style scoped>

</style>
