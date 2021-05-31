<template>
    <CDropdown
      :togglerText="getCurrentLocale()"
      light
    >
        <CDropdownItem v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
          <Flag v-bind:country_code="locale" class="mr-1"/>{{locale}}
        </CDropdownItem>
    </CDropdown>
</template>


<script>
import { Flag } from '@/components/Flag'

export default {
  name: 'LocaleSwitcher',
  components: { Flag, },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    },
    getCurrentLocale() {
      return this.$i18n.locale;
    }
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
    }
  }
}
</script>

<style scoped>
.dropdwon {
  min-width: 50px;
}
.dropdown-item {
  vertical-align: middle;
  min-width: 50px;
}
</style>
