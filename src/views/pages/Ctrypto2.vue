<template>
  <div>
    <button type="submit" class="btn btn-primary mt-3">
      {{ this.submitText }}
      <div v-show="spinner_display" class="spinner-border text-light ml-2" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <CIcon v-show="check_display" name="cil-check-alt"/>
    </button>
  </div>
</template>

<script>
export default {
  name: "Ctrypto2",
  data() {
    return {
      email: "",
      submitText: this.$tc('notify_me', 0) + " !",
      spinner_display: true,
      check_display: false,
    }
  }
}
</script>

<style scoped>

</style>