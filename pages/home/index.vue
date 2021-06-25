<template>
  <div class="main-hotels-container row m-0" style="height: 100vh">
    <div
      v-for="hotel in this['hotels/hotlesGetter']"
      :key="hotel.id"
      class="col-sm-12 col-md-4 col-lg-3 col-xl-2 p-2"
    >
      <HotelListingPageCards :data="hotel" :theme="common" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HotelListingPageCards from '../../components/cards/hotel-list-page-card'

export default {
  components: {
    HotelListingPageCards,
  },
  data() {
    return {
      common: {},
    }
  },
  computed: mapGetters(['hotels/hotlesGetter', 'common/commonGetter']),
  created() {
    this['hotels/getHotels']()
    this.common = this['common/commonGetter']
  },
  methods: {
    ...mapActions(['hotels/getHotels']),
  },
}
</script>

<style></style>
