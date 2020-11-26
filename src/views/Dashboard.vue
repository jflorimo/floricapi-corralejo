<template>
  <div>
    <CCard v-if="market_list">
      <CCardHeader class="text-center font-weight-bolder border-0">
        {{ $tc('market', 0) }}
      </CCardHeader>
      <CCardBody class="px-0 mx-0">
      <bTable
        :data="market_list"
        :default-sort-direction="defaultSortDirection"
        pack="fas"
        :sort-icon="sortIcon"
        :sort-icon-size="sortIconSize"
      >
        <b-table-column field="name" label="name" sortable v-slot="item">
            <Flag v-bind:country_code="item.row.country_code"/> {{ item.row.short_name }}
        </b-table-column>

        <b-table-column field="price" label="price" sortable v-slot="item">
            {{ Math.round(item.row.current_price)  }}
        </b-table-column>
        
        <b-table-column field="change" label="change" sortable v-slot="item">
            {{ item.short_name }}
        </b-table-column>
        
        <b-table-column field="chart" label="chart" v-slot="item">
            {{ item.short_name }}
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
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
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
