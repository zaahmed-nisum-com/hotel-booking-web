<template>
  <div class="single-hotel-detail-card-container row m-0 p-2">
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div class="d-flex justify-content-between">
        <p class="m-0 font-montserrat">Apartment</p>
        <Button title="Book now" />
      </div>
      <!-- title ,location -->
      <div class="d-flex ml-2 mt-3 mb-3 mb-2 align-items-center">
        <div>
          <font-awesome-icon
            :icon="['fas', 'twitter']"
            class="small-icon mar-4 social-icon-twitter"
          />
        </div>
        <div>
          <div>
            <div class="d-flex align-items-center">
              <font-awesome-icon
                :icon="['fas', 'map-marker-alt']"
                class="small-icon mar-4 social-icon-twitter"
              />
              <p class="m-0 font-montserrat">Location</p>
            </div>
            <h3 class="font-montserrat">
              printer took a galley of type and scrambled
            </h3>
            <div></div>
          </div>
        </div>
      </div>
      <!-- title , location-->
      <!-- rooms,design -->
      <div class="d-flex ml-2 mt-3 mb-3 mb-2 align-items-center">
        <div class="d-flex align-items-center">
          <div class="category-chips d-flex m-2">
            <font-awesome-icon
              :icon="['fas', 'users']"
              class="small-icon mar-4 social-icon-twitter"
            />
            <p class="m-0 font-montserrat text-center">2 beds</p>
          </div>
          <div class="category-chips d-flex m-2">
            <font-awesome-icon
              :icon="['fas', 'bed']"
              class="small-icon mar-4 social-icon-twitter"
            />
            <p class="m-0 font-montserrat text-center">2 beds</p>
          </div>
          <div class="category-chips d-flex m-2">
            <font-awesome-icon
              :icon="['fas', 'bath']"
              class="small-icon mar-4 social-icon-twitter"
            />
            <p class="m-0 font-montserrat text-center">2 beds</p>
          </div>
        </div>
      </div>
      <!-- rooms,design  -->
      <!-- rotine desciption -->
      <div class="ml-2 mt-3 mb-3 mb-2">
        <h4>Description</h4>
        <p class="m-0 font-size-small font-montserrat">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap
        </p>
      </div>
      <!-- rotine desciption  -->
    </div>
    <div
      class="col-sm-12 col-md-12 col-lg-6 col-xl-6 hotel-intro-image-container"
    >
      <img src="https://fakeimg.pl/400x450/" />
    </div>
    <!-- packges -->
    <div class="d-flex col-12 align-items-center justify-content-between">
      <div class="d-flex">
        <Button isIcon="true" title="Send Message" />
      </div>
      <div class="d-flex">
        <div class="d-flex">
          <p class="m-0 font-montserrat">Share</p>
          <font-awesome-icon
            :icon="['fas', 'share-alt']"
            class="small-icon mar-4 social-icon-twitter"
          />
        </div>
        <font-awesome-icon
          :icon="['fab', 'twitter']"
          class="small-icon mar-4 social-icon-twitter"
        />
        <font-awesome-icon
          :icon="['fab', 'instagram-square']"
          class="small-icon mar-4 social-icon-twitter"
        />
        <font-awesome-icon
          :icon="['fab', 'twitter']"
          class="small-icon mar-4 social-icon-twitter"
        />
      </div>
    </div>
    <!-- packges  -->
  </div>
</template>

<script>
import Button from '../../buttons/roundButton'

export default {
  components: {
    Button,
  },
}
</script>

<style scoped>
.hotel-intro-image-container img {
  width: 100%;
}
</style>
