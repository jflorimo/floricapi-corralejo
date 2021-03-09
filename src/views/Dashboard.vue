<template>
  <div>
    <CCard v-if="market_list">
      <CCardHeader class="font-weight-bolder border-0">
        {{ $tc('market', 0) }}
      </CCardHeader>
      <CCardBody class="px-0 mx-0">
      <bTable
        pack="fas"
        :data="market_list"
        :default-sort-direction="defaultSortDirection"
        :sort-icon="sortIcon"
        :sort-icon-size="sortIconSize"
        :hoverable="isHoverable"
      >
        <b-table-column field="name" label="name" sortable v-slot="item">
            <Flag v-bind:country_code="item.row.country_code"/> {{ item.row.short_name }}
        </b-table-column>

        <b-table-column field="price" label="price" sortable v-slot="item">
            {{ item.row.currency.symbol }} {{ item.row.current_price }}
        </b-table-column>
        
        <b-table-column field="24h_percentage" label="24h %" sortable v-slot="item">
            <PercentageChange class="text-right" v-bind:market="item.row"/>
        </b-table-column>

        <b-table-column field="24h" label="24h" v-slot="item">
            {{ item.row.currency.symbol }} {{ item.row.last_close }}
        </b-table-column>

        <b-table-column field="time" label="time" v-slot="item">
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
import { PercentageChange } from '@/views/capi/PercentageChange'
// import { TinyGraph } from '@/views/capi/TinyGraph'
import { Flag } from '@/views/capi/Flag'

export default { 
  name: 'Home',
  components: {
    Clock,
    PercentageChange,
    // TinyGraph,
    Flag,
  },
  data () { 
    return {
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      isHoverable: true,
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

<style scoped>
</style>