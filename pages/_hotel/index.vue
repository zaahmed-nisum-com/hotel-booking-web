<template>
  <div class="row">
    <div v-for="packageItem in hotel" :key="packageItem.id">
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
