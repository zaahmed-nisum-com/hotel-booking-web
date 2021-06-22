<template>
  <div class="authorized-header-main">
    <ul>
      <li><NuxtLink to="/about">About Us</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
import AppTheme from '../../config/theme'

export default {
  props: {
    theme: AppTheme,
  },
}
</script>

<style>
.authorized-header-main {
  display: flex;
}
</style>
