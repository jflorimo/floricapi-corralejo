<template>
  <div>
      <BTable
          hoverable
          selectable
          @select="selectedRow"
          :data="crypto_list"
          :row-class="(row, index) => 'capi-row'"
      >
        <b-table-column field="favorite" label="" v-slot="item" width="5">
          <FavoriteStar :filled="false"/>
        </b-table-column>
        <b-table-column field="#" label="#" v-slot="item" width="10"
                        :custom-sort="idSort"
                        sortable
        >
          <small>{{ item.row.id }}</small>
        </b-table-column>

        <b-table-column field="name" label="name" v-slot="item"
                        :custom-sort="nameSort"
                        sortable
        >
          <a :href='"/cryptocurrency/" + item.row.fcid'>
            <Cryptoicon :symbol="item.row.symbol" :size="24" generic/> {{ item.row.name }}
          </a>
        </b-table-column>

        <b-table-column field="symbol" label="" v-slot="item">
          <small>{{ item.row.symbol }}</small>
        </b-table-column>

        <b-table-column field="price" label="Price" v-slot="item"
                        :custom-sort="priceSort"
                        sortable
        >
          ${{ item.row.price }}
        </b-table-column>

        <b-table-column field="percent_change_1h" label="1h" v-slot="item"
                        :custom-sort="change1HSort"
                        sortable
        >
          <PercentageColor :percentage_number="item.row.percent_change_1h"/>
        </b-table-column>

        <b-table-column field="percent_change_24h" label="24h" v-slot="item"
                        :custom-sort="change24HSort"
                        sortable
        >
          <PercentageColor :percentage_number="item.row.percent_change_24h"/>
        </b-table-column>

        <b-table-column field="percent_change_7d" label="7d" v-slot="item"
                        :custom-sort="change7DSort"
                        sortable
        >
          <PercentageColor :percentage_number="item.row.percent_change_7d"/>
        </b-table-column>

        <b-table-column field="volume_24h" label="24h Volume" v-slot="item"
                        :custom-sort="volume24HSort"
                        sortable
        >
          ${{abbreviateNumber(item.row.volume_24h)}}
        </b-table-column>

        <b-table-column field="last_7_days" label="Last 7 Days" v-slot="item">
          <CryptoTinyGraph
              :pointList="item.row.graph"
              :lastPoint="parseFloat(item.row.price)"
              :colorLine="getGraphColor(item.row.percent_change_7d)"/>
        </b-table-column>
      </BTable>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {asciiSort, numericSort} from "@/helpers/SortFunctions";
import {numberWithCommas} from "@/helpers/Numeric";
import PercentageColor from "@/components/PercentageColor/PercentageColor";
import FavoriteStar from "@/components/FavoriteStar/FavoriteStar";
import CryptoTinyGraph from "@/components/TinyGraph/CryptoTinyGraph";

export default {
  name: "CardCryptoGeneral",
  components: {CryptoTinyGraph, FavoriteStar, PercentageColor},
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      crypto_list: "crypto/crypto_list",
    })
  },
  methods: {
    idSort(itemA, itemB, isAscending) {return numericSort(itemA.id, itemB.id, isAscending)},
    nameSort(itemA, itemB, isAscending) {return asciiSort(itemA.name, itemB.name, isAscending)},
    priceSort(itemA, itemB, isAscending) {return numericSort(itemA.price, itemB.price, isAscending)},
    change1HSort(itemA, itemB, isAscending) {return numericSort(itemA.percent_change_1h, itemB.percent_change_1h, isAscending)},
    change24HSort(itemA, itemB, isAscending) {return numericSort(itemA.percent_change_24h, itemB.percent_change_24h, isAscending)},
    change7DSort(itemA, itemB, isAscending) {return numericSort(itemA.percent_change_7d, itemB.percent_change_7d, isAscending)},
    volume24HSort(itemA, itemB, isAscending) {return numericSort(itemA.volume_24h, itemB.volume_24h, isAscending)},

    abbreviateNumber(value) {return numberWithCommas(value)},
    getGraphColor(value) {
      return (value < 0)? "#e55353" : "#2eb85c"
    },
    selectedRow(item){
      this.$router.push({ name: 'CryptoAsset', params: { fcid: item.fcid } })
    }
  },
  created() {
  }
}
</script>

<style>
.capi-row td {
  padding-top: 1px;
  padding-bottom: 1px;
  vertical-align: middle;
  cursor: pointer;
}
</style>
