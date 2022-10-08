<template>
  <div class="live_stream">
    <div class="header">
      <div class="d-flex justify-space-between info--text">
        <i class="fa fa-angle-down">arrow</i>
        <i class="fa fa-angle-times-circle">arrow</i>
      </div>

      <h4 class="white--text pb-3">Happy apes NFT AMA session</h4>
    </div>

    <div class="d-flex flex-wrap users-on-call">
      <div class="user text-center align-self-start" v-for="i in 30" :key="i">
        <v-avatar color="primary" size="2.7rem">
          <img
            :src="require('@/assets/images/svg/profile-img.svg')"
            alt="John"
          />
        </v-avatar>
        <p class="white--text mb-0">Simon...</p>
        <small class="info--text d-block"
          ><div class="dot"></div>
          Host</small
        >
      </div>
    </div>

    <div class="d-flex justify-space-between py-3">
      <p class="primary--text mb-0">view more listeners...</p>
      <p class="info--text mb-0">+320 Listeners</p>
    </div>

   <div class="d-flex flex-column pb-5">
     <cp-base-button size="small" class="mb-3 align-self-center">Request to Speak</cp-base-button>
    <cp-base-button color="secondary" size="small" class="info--text align-self-end">
      <inline-svg
        :src="require('@/assets/images/svg/export-icon.svg')"
        class="pointer mr-2"
        title=""
      />Share</cp-base-button
    >
   </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
};
</script>