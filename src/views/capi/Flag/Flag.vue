<template>
	<CIcon :content="formatFlagCode(this.country_code)"/>
</template>

<script>
import { flagSet } from '@coreui/icons'

export default {
	name: 'Flag',
	props: {country_code: String},
	data () {
  return {
			flags: flagSet,
    }
  },
  methods: {
    formatFlagCode(str) {
    console.log(this.flags)
    console.log(str)

    if (str === "en") str = "us"
      if (str != null)
        return this.flags["cif" + str.charAt(0).toUpperCase() + str.slice(1)]
      else
        return null
    },   
  },
}

</script>

<style scoped>
</style>