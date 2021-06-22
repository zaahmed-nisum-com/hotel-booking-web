<template>
  <div>
    <UnAuthorizedHeader />
    <HorizontalLineSeparator />
    <p>About Us</p>
  </div>
</template>

<script>
import UnAuthorizedHeader from '../../components/headers/unauthorized.vue'
import HorizontalLineSeparator from '../../components/line-separater/horizontal.vue'

export default {
  components: {
    UnAuthorizedHeader,
    HorizontalLineSeparator,
  },
}
</script>

<style></style>
