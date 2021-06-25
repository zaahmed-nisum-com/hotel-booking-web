<template>
  <div
    class="rounded-btn font-montserrat cursor-pointer d-flex"
    v-bind:style="[
      theme.theme == 'light'
        ? { backgroundColor: themeConstants.lightTheme.btnBg }
        : {
            backgroundColor: themeConstants.darkTheme.btnBg,
          },
    ]"
  >
    <p
      class="m-0 font-weight-bold"
      v-bind:style="[
        theme.theme == 'light'
          ? { color: themeConstants.lightTheme.textColor }
          : {
              color: themeConstants.darkTheme.textColor,
            },
      ]"
    >
      {{ title }}
    </p>
    <font-awesome-icon
      v-show="this.isIcon"
      :icon="[iconType, iconName]"
      class="small-icon mar-2 ml-2 align-self-center"
      v-bind:class="[isLiked ? 'activeLike' : '']"
    />
  </div>
</template>

<script>
import themeConstants from '../../../config/theme'

export default {
  props: ['title', 'isIcon', 'iconType', 'iconName', 'isLiked', 'theme'],
  data() {
    return {
      themeConstants,
    }
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
