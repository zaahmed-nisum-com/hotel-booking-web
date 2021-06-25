<template>
  <div class="row m-0">
    <div
      class="col-sm-12 col-md-12 col-lg-6 col-xl-6"
      v-for="packageItem in hotel"
      :key="packageItem.id"
    >
      <SingleHotelDetailPageCard data="packageItem" :theme="common" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import fakeData from '../../fakedata/data.json'
import SingleHotelDetailPageCard from '../../components/cards/single-hotel-detail-page-card'

export default {
  components: {
    SingleHotelDetailPageCard,
  },
  data: () => {
    return {
      common: {},
      hotel: fakeData.hotel,
    }
  },
  computed: mapGetters(['common/commonGetter']),
  created() {
    this.common = this['common/commonGetter']
  },
  methods: {
    ...mapActions(['hotels/getHotels']),
  },
}
</script>

<style></style>
