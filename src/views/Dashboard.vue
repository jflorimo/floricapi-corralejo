<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <span class="nav-link active">{{ $tc('cryptocurrency', 0) }}</span>
      </li>
    </ul>
    <CardCryptoGeneral/>
  </div>
</template>

<script>
import { CardCryptoGeneral } from "@/components/CardCryptoGeneral"

export default {
  name: 'Home',

  components: {
    CardCryptoGeneral
  },

  data () {
    return {}
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
