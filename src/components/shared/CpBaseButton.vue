<template>
  <v-btn
    :color="color"
    v-on="$listeners"
    :disabled="disabled"
    :loading="loading"
    depressed
    rounded
    :block="block"
    :outlined="outlined"
    class="text-capitalize"
    :style="{
      width: buttonWidth
    }"
  >
    <slot />
  </v-btn>
</template>

<script>

export default {
  data: () => ({
    btnSizes: {
      large: '300px',
      medium: '200px',
      small: 'inherit'

    }
  }),
  props: {
    color: {
      type: String,
      default: "primary",
    },
    outlined: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    block: {
      type: Boolean,
      default: false,
    },

    size: {
      type: String,
      default:'large'
    },
  },

  computed:{
    buttonWidth(){
      return this.btnSizes[this.size]
    }
  }
};
</script>

<style lang="scss">
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  opacity: 0.5;
  background-color: #c4c4c4 !important;
  color: #ffffff !important;
}
</style>
