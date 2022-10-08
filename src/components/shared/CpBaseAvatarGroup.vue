<template>
  <div class="d-flex align-center">
    <v-avatar color="primary" class="group-avatar" size="2rem" v-for="img in images" :key="img">
      <img :src="img" alt="John" />
    </v-avatar>

    <h4 class="white--text ml-3">{{label}} </h4>
  </div>
</template>

<script>
export default {
  props: {
    label:{
        type: String
    },
    images: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.group-avatar{
    position: relative;
    &:not(:first-child){
        margin-left: -10px;
    }
}
</style>