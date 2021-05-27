<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('coreui/toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('coreui/toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <img
        class="c-sidebar-brand-full"
        src="@/assets/icons/logo-flocapi-black.png"
        size="custom-size"
        width="150"
      />
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/">{{ $tc('homepage', 0) }}</CHeaderNavLink>
      </CHeaderNavItem>

      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/index/">{{ $tc('index', 0) }}</CHeaderNavLink>
      </CHeaderNavItem>

      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/stock/">{{ $tc('stock', 0) }}</CHeaderNavLink>
      </CHeaderNavItem>

      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/cryptocurrency/">{{ $tc('cryptocurrency', 0) }}</CHeaderNavLink>
      </CHeaderNavItem>

    </CHeaderNav>
    <span class="c-header-nav" v-show="displayLoginButtons">
      <CButton class="font-weight-bold btn-sm" @click="goLogin">Log in</CButton>
    </span>
    <span class="c-header-nav px-1" v-show="displayLoginButtons">
      <CButton class="btn-primary font-weight-bold btn-sm px-2" @click="goRegister">Sign up</CButton>
    </span>
    <LocaleSwitcher class="c-header-nav px-2"/>


  </CHeader>
</template>

<script>
import { LocaleSwitcher } from '@/views/capi/LocaleSwitcher'
import {mapActions, mapGetters} from "vuex";


export default {
  name: 'TheHeader',
  components: {
    LocaleSwitcher,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      isLogged: "accounts/isLogged"
    }),
    displayLoginButtons() {
      return !this.isLogged
    }
  },
  methods: {
    ...mapActions({
      getUserDetails: "accounts/me",
      setNotifyMeCryptoSent: "accounts/setNotifyMeCryptoSent",
      updateTokenValidity: "accounts/updateTokenValidity"
    }),
    goRegister(){ this.$router.push('/register') },
    goLogin(){ this.$router.push('/login') },
  },
  created() {
    this.updateTokenValidity()
    console.log("Token: " + this.isLogged)
  },
}
</script>
