<template>
  <div>
    <Page404 v-if="displayNotFound"/>
    <div v-else>
      <CryptoNavigation :name="coinData.name"/>
      <CryptoNameIcon :name="coinData.name" :symbol="coinData.symbol"/>
      <CryptoPriceDetail :coinData="coinData"/>
      <div>
        <ul>
          <li>max_supply: {{coinData.max_supply}}</li>
          <li>circulating_supply: {{coinData.circulating_supply}}</li>
          <li>total_supply: {{coinData.total_supply}}</li>
          <li>volume_24h: {{coinData.volume_24h}}</li>
          <li>percent_change_1h: {{coinData.percent_change_1h}}</li>
          <li>percent_change_24h: {{coinData.percent_change_24h}}</li>
          <li>percent_change_7d: {{coinData.percent_change_7d}}</li>
          <li>market_cap: {{coinData.market_cap}}</li>
          <li>last_updated: {{coinData.last_updated}}</li>
        </ul>
      </div>
      jfoiwjefoiwjef ICI CEST BIEN
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Page404 from "@/views/Page404";
import CryptoNameIcon from "@/components/CryptoDetail/CryptoNameIcon";
import CryptoNavigation from "@/components/CryptoDetail/CryptoNavigation";
import CryptoPriceDetail from "@/components/CryptoDetail/CryptoPriceDetail";

export default {
  name: "CryptoAsset",
  components: {CryptoPriceDetail, CryptoNavigation, CryptoNameIcon, Page404},
  props: {
    fcid: String,
  },
  data () {
    return {
      displayNotFound: false,
      coinData: {},
    }
  },
  computed: {

  },
  methods: {
    ...mapActions({
      fetch_detail: 'crypto/synched_get_crypto_detail'
    }),
    updatePageTitle() {
      document.title = this.coinData.name + " | Flocapi"
    },
    async yolo(){
      console.log("YOLO")
      // try {
      //   const {data} = await this.fetch_detail(this.$route.params.fcid)
      //   console.log(data)
      //   this.coinData = data ? data : {}
      //
      // } catch (e) {
      //   console.log("ERROR ICI: ", e)
      //   this.displayNotFound = true
      // }
      await this.fetch_detail(this.$route.params.fcid).then((r) => {
          console.log(r.data)
          this.coinData = r.data ? r.data : {}
      }).catch((e) => {
          console.log("ERROR ICI: ", e)
          this.displayNotFound = true
      })
    }
  },
  mounted() {
    console.log("fwfewefwef")
  },
  created() {
    this.yolo()

    // console.log(this.displayNotFound)
    // this.fetch_detail(this.$route.params.fcid).then((r) => {
    //   console.log("DAT: " + r.data)
    //   this.coinData = r.data
    //   this.updatePageTitle()
    // }).catch( () => {
    //   console.log('error errr')
    //
    //
    //   this.displayNotFound = true
    //
    //   console.log(this.displayNotFound)
    // })
  }
}
</script>

<style>
</style>
