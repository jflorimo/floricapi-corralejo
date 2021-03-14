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
        <CHeaderNavLink to="/">
         {{ $tc('homepage', 0) }}
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/">
          {{ $tc('index', 0) }}
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/">
          {{ $tc('stock', 0) }}
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/">
          {{ $tc('cryptocurrency', 0) }}
        </CHeaderNavLink>
      </CHeaderNavItem>

    </CHeaderNav>
    <LocaleSwitcher class="c-header-nav px-3"/>


  </CHeader>
</template>

<script>
import { LocaleSwitcher } from '@/views/capi/LocaleSwitcher'


export default {
  name: 'TheHeader',
  components: {
    LocaleSwitcher,
  }
}
</script>
