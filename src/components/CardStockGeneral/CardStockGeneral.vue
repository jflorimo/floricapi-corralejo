<template>
  <CCard>
    <CCardHeader class="font-weight-bold">{{ $tc('stock', 0) }}</CCardHeader>
    <bTable
      pack="fas"
      :data="stock_list"
      :narrowed="true"
      :default-sort-direction="defaultSortDirection"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      :hoverable="isHoverable"
      :row-class="(row, index) => 'capi-row'"
    >
      <b-table-column field="name" v-bind:label="$tc('name', 1)" sortable v-slot="item">
          <Flag v-bind:country_code="item.row.country_code"/> {{ item.row.short_name }}
      </b-table-column>

      <b-table-column field="price" v-bind:label="$tc('stock_price_label', 1)" sortable v-slot="item">
          {{ item.row.currency.symbol }} {{ item.row.current_price }}
      </b-table-column>

      <b-table-column field="24h_percentage" label="24h %" sortable v-slot="item">
          <PercentageChange class="text-right"
            v-bind:market="item.row"
            v-bind:compared_to_x_day_ago="1"
          />
      </b-table-column>

      <b-table-column field="7d" v-bind:label="$tc('7d', 0) + ' %'" v-slot="item">
          <PercentageChange class="text-right"
            v-bind:market="item.row"
            v-bind:compared_to_x_day_ago="7"
          />
      </b-table-column>

      <b-table-column width="170" field="chart" label="chart" v-slot="item">
          <TinyGraph v-bind:marketId="item.row.id"/>
      </b-table-column>

      <b-table-column field="time" v-bind:label="$tc('time', 0)" v-slot="item">
          <Clock v-bind:timezone="item.row.timezone"/>
      </b-table-column>
    </bTable>
  </CCard>
</template>

<script>
import { mapState } from 'vuex'

import { Clock } from '@/components/Clock'
import { PercentageChange } from '@/components/PercentageChange'
import { TinyGraph } from '@/components/TinyGraph'
import { Flag } from '@/components/Flag'


export default {
  name: 'CardStockGeneral',
  components: {
    Clock,
    PercentageChange,
    TinyGraph,
    Flag
  },
  props: {

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
    ...mapState('capi_get', ['stock_list']),
  },
  methods: {
  },
  mounted() {
  },
  created() {
    this.$store.dispatch('capi_get/fetch_stocks').then(() => {})
  },
  beforeDestroy () {
  }
}
</script>

<style>
  .capi-row td{
    padding-top: 1px;
    padding-bottom: 1px;
    vertical-align: middle;
  }
</style>
