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
    
    <CSidebarNav>
      <CSidebarNavItem v-bind:name="$tc('homepage', 0)" to="/" icon="cil-speedometer"/>
      <CSidebarNavItem v-bind:name="$tc('index', 0)" to="/index/" icon="cil-chart-line"/>
      <CSidebarNavItem v-bind:name="$tc('stock', 0)" to="/stock/" icon="cil-bar-chart"/>
      <CSidebarNavItem v-bind:name="$tc('cryptocurrency', 0)" to="/cryptocurrency/" icon="cib-bitcoin"/>
    </CSidebarNav>

    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('coreui/set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>

export default {
  name: 'TheSidebar',
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
