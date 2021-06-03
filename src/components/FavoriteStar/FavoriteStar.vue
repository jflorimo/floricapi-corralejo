<template>
<div>
  <CIcon v-show="!filled" name="cil-star" /> <FontAwesomeIcon v-show="filled" :icon="['fa', 'star']"/>
</div>
</template>

<script>
export default {
  name: "FavoriteStar",
  props: {
    filled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
