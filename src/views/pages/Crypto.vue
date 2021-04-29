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
              <CIcon :content="envelopIcon"/>
            </span>
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary mt-3">Notify Me!</button>
        
      </form>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { cilEnvelopeOpen } from '@coreui/icons'

export default { 
  name: 'Crypto',

  components: {
  },

  data () { 
    return {
      envelopIcon: cilEnvelopeOpen,
      email: "",
    } 
  },

  computed: {
    ...mapState('capi_post', ['isNotifyMeSent']),
  },

  methods: {
    submitNotifyMe: function () {
      this.$store.dispatch("capi_post/post_notify_me_crypto", this.email).then(() => {
        console.log("isNotifyMeSent: " + this.isNotifyMeSent)
      })
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
.news {
  margin: auto;
  text-align: center;

}
.email-input {
  max-width: 400px;
  margin: auto;
}
</style>