<template>
  <div>
    <CCard v-if="market_list">
      <CCardHeader class="text-center font-weight-bolder border-0">
        {{ $tc('market', 0) }}
      </CCardHeader>
      <CCardBody class="px-0 mx-0">
        <CDataTable
          class="table mb-0 px-0"
          :items="market_list"
          :fields="tableFields"
          hover>
          <template #short_name="{item}">
            <td>
              <Flag v-bind:country_code="item.country_code"/>
              {{ item.short_name }}
              
            </td>
          </template>
          <template #time="{item}">
            <td>
              <Clock v-bind:timezone="item.timezone"/>
            </td>

          </template>
          <template #chart="{item}">
            <td>
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
import { Clock } from '@/views/capi/Clock'
import { TinyGraph } from '@/views/capi/TinyGraph'
import { Flag } from '@/views/capi/Flag'

export default { 
  name: 'Home',
  components: {
    Clock,
    TinyGraph,
    Flag,
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
    } 
  },

  computed: { 
    ...mapState('capi', ['market_list', 'market_last_7_points']),
    ...mapState('coreui', ['test', 'test2']),
  },

  methods: {
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
