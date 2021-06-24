<template>
  <div class="hotel-main-card-container border p-2">
    <img src="https://fakeimg.pl/400x300/" />
    <div class="d-flex p-2">
      <font-awesome-icon
        :icon="['fas', 'heart']"
        v-bind:class="[isFavourite ? 'activeFavourite' : '']"
        class="small-icon mar-2"
      />
      <font-awesome-icon
        :icon="['fas', 'thumbs-up']"
        class="small-icon mar-2"
        v-bind:class="[isLiked ? 'activeLike' : '']"
      />
      <font-awesome-icon
        :icon="['fas', 'info-circle']"
        class="small-icon mar-2"
      />
    </div>
    <h5 class="text-center">{{ this.data.title }}</h5>
    <div>
      <p>{{ this.data.description.substring(0, 150) + '..' }}</p>
    </div>
    <div class="d-flex p-2 social-links justify-content-between">
      <div class="d-flex">
        <font-awesome-icon
          :icon="['fab', 'twitter']"
          class="small-icon mar-2 social-icon-twitter"
        />
        <font-awesome-icon
          :icon="['fab', 'facebook-f']"
          class="small-icon mar-2 social-icon-fb"
        />
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          class="small-icon mar-2 social-icon-instagram"
        />
      </div>
      <!-- <NuxtLink to="this.data.id"> -->
      <nuxt-link :to="this.data.title">
        <div class="d-flex mr-2">
          <font-awesome-icon
            style="position: absolute"
            :icon="['fas', 'chevron-right']"
            class="small-icon open-icon mr-2"
          />
        </div>
      </nuxt-link>
      <!-- </NuxtLink> -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isLiked: true,
      isFavourite: true,
    }
  },
  props: ['data'],
  created() {
    console.log(this.data)
  },
}
</script>

<style>
.hotel-main-card-container {
  box-shadow: 4px 2px 9px -2px #d8d8d8;
  border-radius: 2px;
}
.hotel-main-card-container img {
  width: 100%;
}
h5 {
  font-family: 'Benne', serif;
  font-family: 'Montserrat', sans-serif;
}
</style>
