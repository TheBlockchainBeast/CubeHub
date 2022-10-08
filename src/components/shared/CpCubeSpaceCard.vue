<template>
  <div class="cube-space-card">
    <cp-base-avatar :user="user"></cp-base-avatar>

    <div class="content">
      <p class="white--text">
        Join my AMA Session and ask anything about my new NFT collection Live
        #TheHappyapescollection #happyapes
      </p>

      <div class="live-stream">
        <div class="d-flex align-center">
          <span class="dot"></span> <small class="white--text">Live</small>
          
        </div>
        <h5 class="white--text py-2">Happy apes NFT AMA session</h5>
        <cp-base-avatar-group
          :images="images"
          label="320 Listening"
        ></cp-base-avatar-group>
        <cp-base-button color="secondary" size='large' class="my-3" >Start Listening </cp-base-button>
        <p class="white--text mb-0"> Host:Micheal</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "micheal",
        wallet_id: "x02xd....2ed0",
        url: require("@/assets/images/svg/profile-img.svg"),
      },

      images: [
        require("@/assets/images/svg/profile-img.svg"),
        require("@/assets/images/svg/profile-img.svg"),
        require("@/assets/images/svg/profile-img.svg"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cube-space-card {
  background: #1f1e3e;
  padding: 18px 12px;
  border-radius: 8px;

  .content {
    padding: 10px 50px;

    .live-stream {
      background: var(--primary);
      padding: 10px 30px;
      border-radius: 10px;
      .dot {
        height: 8px;
        width: 8px;
        border-radius: 4px;
        display: block;
        background: #0ae596;
        margin-right: 6px;
      }
    }
  }
}
</style>
