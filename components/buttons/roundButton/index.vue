<template>
  <div class="rounded-btn font-montserrat cursor-pointer d-flex">
    <p class="m-0 font-weight-bold">{{ title }}</p>
    <font-awesome-icon
      v-show="this.isIcon"
      :icon="['fas', 'thumbs-up']"
      class="small-icon mar-2 ml-2"
      v-bind:class="[isLiked ? 'activeLike' : '']"
    />
  </div>
</template>

<script>
export default {
  props: ['title', 'isIcon'],
  created() {
    console.log(this.isIcon)
  },
}
</script>

<style scoped>
.rounded-btn {
  width: fit-content;
  border: solid 0.5px #e6e6e6;
  background-color: #00a1ff;
  border-radius: 20px;
  padding: 5px;
  color: white;
}
</style>
>
