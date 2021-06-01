<template>
  <div>
<!--    <CCard class="border-0 rounded-0">-->
      <BTable
          hoverable
          :data="crypto_list"
      >

        <b-table-column label="#" v-slot="item" width="10"
                        :custom-sort="idSort"
                        sortable
        >
          <small>{{ item.row.id }}</small>
        </b-table-column>

        <b-table-column field="name" label="name" v-slot="item"
                        :custom-sort="nameSort"
                        sortable
        >
          <Cryptoicon :symbol="item.row.symbol" :size="24" generic/> {{ item.row.name }}
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
          {{ item.row.volume_24h }}
        </b-table-column>

        <b-table-column field="last_7_days" label="Last 7 Days" v-slot="item"></b-table-column>
      </BTable>


<!--    </CCard>-->
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import PercentageColor from "@/components/PercentageColor/PercentageColor";
import {asciiSort, numericSort} from "@/helpers/SortFunctions";

export default {
  name: "CardCryptoGeneral",
  components: {PercentageColor},
  data() {
    return {
      table_loading: false
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
  },
  created() {
  }
}
</script>

<style scoped>

</style>
