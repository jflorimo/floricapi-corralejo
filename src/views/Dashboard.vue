<template>
  <div>
    <CCard v-if="market_list">
      <CCardHeader class="text-center font-weight-bolder border-0">
        {{ $tc('market', 0) }}
      </CCardHeader>
      <CCardBody class="px-0 mx-0">
      <bTable
        :data="market_list"
        :columns="columns"
      >
        <b-table-column label="name" v-slot="item">
            <Flag v-bind:country_code="item.row.country_code"/> {{ item.row.short_name }}
        </b-table-column>

        <b-table-column label="price" width="40" v-slot="item">
            {{ Math.round(item.row.current_price) +""+ item.row.currency.symbol }}
        </b-table-column>
        
        <b-table-column label="change" v-slot="item">
            {{ item.short_name }}
        </b-table-column>
        
        <b-table-column label="chart" v-slot="item">
            {{ item.short_name }}
        </b-table-column>

        <b-table-column label="time" v-slot="item">
            <Clock v-bind:timezone="item.row.timezone"/>
        </b-table-column>

<!--         <b-table-column label="chart" width="40" v-slot="item">
            <TinyGraph v-bind:marketId="item.row.id"/>
        </b-table-column> -->


      </bTable>

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
        { key: 'short_name', label: 'Name'},
        { key: 'price', label: 'price'},
        { key: 'change', label: '24h' },
        { key: 'chart', label: '7d' },
        { key: 'time', label: 'time' },
      ], 
    } 
  },

  computed: { 
    ...mapState('capi', ['market_list', 'market_last_7_points']),
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
