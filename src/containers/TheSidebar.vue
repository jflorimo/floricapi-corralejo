<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('coreui/set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <img 
        class="c-sidebar-brand-full"
        src="@/assets/icons/logo-flocapi-white.png"
        size="custom-size" 
        width="150" 
      />
      <img
        class="c-sidebar-brand-minimized" 
        src="@/assets/icons/logo.png"
        size="custom-size" 
        width="45"
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('coreui/set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'

export default {
  name: 'TheSidebar',
  nav,
  computed: {
    show () {
      return this.$store.state.coreui.sidebarShow 
    },
    minimize () {
      return this.$store.state.coreui.sidebarMinimize
    }
  }
}
</script>
