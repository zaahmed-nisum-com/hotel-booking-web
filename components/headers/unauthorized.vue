<template>
  <div>
    <div class="un-authorized-header-main" :style="headerStyle">
      <ul>
        <li :style="navUlLi">
          <NuxtLink class="a-link" to="/aboutus">About Us</NuxtLink>
        </li>
        <li><NuxtLink class="a-link" to="/login">Login</NuxtLink></li>
        <li>
          <NuxtLink class="a-link" to="/registration">Registration</NuxtLink>
        </li>
      </ul>
    </div>
    <HorizontalLineSeparator />
  </div>
</template>
<script>
import AppTheme from '../../config/theme'
import HorizontalLineSeparator from '../line-separater/horizontal.vue'
export default {
  components: {
    HorizontalLineSeparator,
  },
  computed: {
    headerStyle() {
      return {
        'background-color': AppTheme.lightTheme.headerBgColor,
      }
    },
    navUlLi() {
      return {
        color: AppTheme.lightTheme.navTextColor,
      }
    },
  },
}
</script>

<style>
.un-authorized-header-main {
  display: flex;
}

.un-authorized-header-main ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.un-authorized-header-main ul li {
  margin: 10px;
  text-decoration: none;
}
</style>
