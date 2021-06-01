<template>
  <div class="news">
      <img
          src="@/assets/icons/logo-flocapi-black.png"
          width="150"
        />
      <h1 class="mt-3"> SOON... TO THE MOON!</h1>
      <p>Get ready! We will be adding Cryptocurrencies soon!</p>

      <form @submit.prevent>
        <div class="input-group email-input">
          <input v-model="email" type="Email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-icon">
          <div class="input-group-append">
            <span class="input-group-text" id="email-icon">
              <CIcon name="cil-envelope-open"/>
            </span>
          </div>
        </div>
        <button @click="submitNotifyMe" class="btn btn-primary mt-3">
          {{ this.submitText }}
          <div v-show="spinner_display" class="spinner-border text-light ml-2" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <CIcon v-show="check_display" :content="checkAltIco"/>
        </button>
      </form>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { cilCheckAlt } from '@coreui/icons'
import { status } from "@/store/const";

export default {
  name: 'Crypto',

  components: {
  },

  data () {
    return {
      checkAltIco: cilCheckAlt,
      email: "",
      submitText: this.$tc('notify_me', 0) + " !",
      spinner_display: false,
      check_display: false,
    }
  },

  computed: {
    ...mapGetters({
      isNotifyMeSent: "accounts/isNotifyMeCryptoSent"
    })
  },

  methods: {
    ...mapActions({
      sendNotifyMeCrypto: "accounts/notifyMeCrypto",
      setNotifyMeCryptoSent: "accounts/setNotifyMeCryptoSent"
    }),
    submitNotifyMe() {
      if (!this.email || this.isNotifyMeSent)
        return

      this.spinner_display = true
      this.sendNotifyMeCrypto({email: this.email}).then(
          (r) => {
            this.setNotifyMeCryptoSent((r.status === status.HTTP_201_CREATED))
            this.spinner_display = false
            this.check_display = this.isNotifyMeSent
          }
      ).catch(
          () => {
            this.setNotifyMeCryptoSent(false)
            this.spinner_display = false
            this.check_display = this.isNotifyMeSent
          }
      )

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

.spinner-border {
  width: 1rem;
  height: 1rem;
}
</style>
