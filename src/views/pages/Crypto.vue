<template>
  <div class="news">
      <img 
          src="@/assets/icons/logo-flocapi-black.png"
          width="150"
        />
      <h1 class="mt-3"> SOON... TO THE MOON!</h1>
      <p>Get ready! We will be adding Cryptocurrencies soon!</p>

      <form v-on:submit.prevent="submitNotifyMe">
        <div class="input-group email-input">
          <input v-model="email" type="Email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-icon">
          <div class="input-group-append">
            <span class="input-group-text" id="email-icon">
              <CIcon name="cil-envelope-open"/>
            </span>
          </div>
        </div>
        

          <button type="submit" class="btn btn-primary mt-3">
            {{ this.submitText }}
            <div v-show="spinner_display" class="spinner-border text-light ml-2" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <CIcon v-show="check_display" name="cil-check-alt"/>
          </button>

      </form>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default { 
  name: 'Crypto',
  data () { 
    return {
      email: "",
      submitText: this.$tc('notify_me', 0) + " !",
      spinner_display: false,
      check_display: false,
    } 
  },

  computed: {
    ...mapState('notify_me', ['isNotifyMeSent']),
  },

  methods: {
    submitNotifyMe() {
      if (this.email && !this.isNotifyMeSent) {
        this.spinner_display = true
        this.$store.dispatch("notify_me/post_notify_me_crypto", this.email).then(() => {
          this.spinner_display = false
          this.check_display = this.isNotifyMeSent
        })
      }
    }
  },

  created() {
  },

  mounted() {
  },

  beforeDestroy () {
  }
}

</script>

<style>
</style>