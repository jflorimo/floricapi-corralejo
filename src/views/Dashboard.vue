<template>
  <div>
    <CCard v-if="market_list">
      <CCardHeader class="text-center font-weight-bolder">
        Récapitulatif des marchés
      </CCardHeader>
      <CCardBody class="px-0 mx-0">
        <CDataTable 
          :items="market_list"
          :fields="tableFields"
          head-color="light"
          hover>
          <template #short_name="{item}">
            <td>
              <CIcon :content="formatFlagCode(item.country_code)"/> 
              {{ item.short_name }}
            </td>
          </template>
          <template #time="{item}">
            <td>
              <Clock v-bind:timezone="item.timezone"/>
            </td>

          </template>
          <template #chart="{item}">
            <td style="padding:0px">
              <TinyGraph v-bind:marketId="item.id"/>
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { flagSet } from '@coreui/icons'
import { Clock } from '@/views/capi/Clock'
import { TinyGraph } from '@/views/capi/TinyGraph'

export default { 
  name: 'Home',
  components: {
    Clock,
    TinyGraph,
  },
  data () { 
    return { 
      tableFields: [
        { key: 'short_name', label: 'short_name'},
        { key: 'symbol', label: 'symbol' },
        { key: 'timezone', label: 'timezone' },
        { key: 'currency', label: 'currency' },
        { key: 'time', label: 'time' },
        { key: 'change', label: 'change (24h)' },
        { key: 'chart', label: 'price (7d)' }
      ],
      flags: flagSet,
    } 
  },

  computed: { 
    ...mapState('capi', ['market_list', 'market_last_7_points']),
    ...mapState('coreui', ['test', 'test2']),
  },

  methods: {
    formatFlagCode(str) {
      if (str != null)
        return this.flags["cif" + str.charAt(0).toUpperCase() + str.slice(1)]
    },   
  },

  created() {
    this.$store.dispatch('capi/fetch_markets').then(() => {
    })
  },

  mounted() {
  },

  beforeDestroy () {
  }
}

</script>
