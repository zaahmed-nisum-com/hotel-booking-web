<template>
  <div class="row m-0">
    <div
      class="col-sm-12 col-md-12 col-lg-6 col-xl-6"
      v-for="packageItem in hotel"
      :key="packageItem.id"
    >
      <SingleHotelDetailPageCard data="packageItem" />
    </div>
  </div>
</template>

<script>
import fakeData from '../../fakedata/data.json'
import SingleHotelDetailPageCard from '../../components/cards/single-hotel-detail-page-card'

export default {
  components: {
    SingleHotelDetailPageCard,
  },
  created() {
    console.log(fakeData.hotel)
  },

  data: () => {
    return { hotel: fakeData.hotel }
  },
}
</script>

<style></style>
