<template>
  <div>
    CRYPTOTO PLOUP {{ nodenv }}
    host: {{ hohost }}
    lg: {{ langue }}
  </div>
</template>

<script>

export default { 
  name: 'Crypto',

  components: {
  },

  data () { 
    return {
      nodenv: process.env.NODE_ENV,
      hohost: process.env.VUE_APP_MILAGRO_HOST,
      langue: process.env.VUE_APP_I18N_LOCALE,
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