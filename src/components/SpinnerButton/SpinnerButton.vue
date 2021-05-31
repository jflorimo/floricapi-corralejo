<template>
  <div v-show="show" class="spinner-border text-light ml-2" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script>
export default {
  name: "SpinnerButton",
  props: {show: Boolean}
}
</script>

<style>
  .spinner-border {
    width: 1rem;
    height: 1rem;
  }
</style>
