<template>
  <div>
    <Page404 v-if="displayNotFound"/>
    <div v-else>

      <CContainer>
        <CRow>
          <CCol>
            <CryptoNavigation :name="coinData.name"/>
          </CCol>
        </CRow>

        <CRow>
          <CCol sm="4" class="mt-auto">
            <CryptoNameIcon :name="coinData.name" :symbol="coinData.symbol"/>
          </CCol>
          <CCol sm="4">
            <CryptoPriceDetail :coinData="coinData"/>
          </CCol>
        </CRow>

        <CRow class="mt-5 border-top">
          <CCol sm="3">
            <CryptoCirculatingSupply :coinData="coinData"/>
          </CCol>
          <CCol sm="3">
            <CryptoVolume24h :coinData="coinData"/>
          </CCol>
          <CCol sm="3">
            <CryptoPriceChange :coinData="coinData"/>
          </CCol>
          <CCol sm="3">
            <ul>
              <li>market_cap: {{coinData.market_cap}}</li>
              <li>last_updated: {{coinData.last_updated}}</li>
            </ul>
          </CCol>
        </CRow>

      </CContainer>

    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Page404 from "@/views/Page404";
import CryptoNameIcon from "@/components/CryptoDetail/CryptoNameIcon";
import CryptoNavigation from "@/components/CryptoDetail/CryptoNavigation";
import CryptoPriceDetail from "@/components/CryptoDetail/CryptoPriceDetail";
import CryptoCirculatingSupply from "@/components/CryptoDetail/CryptoCirculatingSupply";
import CryptoVolume24h from "@/components/CryptoDetail/CryptoVolume24h";
import CryptoPriceChange from "@/components/CryptoDetail/CryptoPriceChange";

export default {
  name: "CryptoAsset",
  components: {
    CryptoPriceChange,
    CryptoVolume24h, CryptoCirculatingSupply, CryptoPriceDetail, CryptoNavigation, CryptoNameIcon, Page404},
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
      fetch_detail: 'crypto/fetch_crypto_detail'
    }),
    updatePageTitle() {
      document.title = this.coinData.name + " | Flocapi"
    },
    async get_detail_or_404(){
      try {
        const {data} = await this.fetch_detail(this.$route.params.fcid)
        this.coinData = data
        this.displayNotFound = false
      } catch (e) {
        this.displayNotFound = true
      }
    }
  },
  created() {
    this.get_detail_or_404()
  }
}
</script>

<style>
</style>
