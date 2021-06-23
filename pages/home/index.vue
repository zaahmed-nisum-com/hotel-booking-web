<template>
  <div class="main-hotels-container row m-0">
    <div
      v-for="hotel in this['hotels/hotlesGetter']"
      :key="hotel.id"
      class="col-sm-12 col-md-4 col-lg-3 col-xl-2 p-2"
    >
      <HotelPageCards :data="hotel" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HotelPageCards from '../../components/cards/hotel-page-card'

export default {
  components: {
    HotelPageCards,
  },
  methods: {
    ...mapActions(['hotels/getHotels']),
  },
  computed: mapGetters(['hotels/hotlesGetter']),
  created() {
    this['hotels/getHotels']()
  },
  mounted() {
    console.log(this['hotels/hotlesGetter'])
  },
}
</script>

<style></style>
