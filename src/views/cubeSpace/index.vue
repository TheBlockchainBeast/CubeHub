<template>
  <div class="cube_space">
    <div
      class="
        d-flex
        justify-space-between
        pt-2
        pb-7
        secondary
        align-center
        header
      "
    >
      <cp-base-avatar noLabel :user="contents[0].user"></cp-base-avatar>
      <cp-base-button size="large">Create Space</cp-base-button>
      <cp-base-filter :filterOptions="filterOptions"></cp-base-filter>
    </div>
    <cp-cube-space-card :contents="contents"></cp-cube-space-card>
    <cp-right-sidevar>
      <notification-tabs></notification-tabs>
      <live-stream></live-stream>
    </cp-right-sidevar>
  </div>
</template>

<script>
import liveStream from "./component/live-stream.vue";
export default {
  components: { liveStream },
  data() {
    return {
      filterOptions: [
        ["Active", "Upcoming", "Complete"],
        ["bitgert chain", "Bsc chain", "Etherium chain"],
      ],
      contents: [
        {
          status: "live",
          host_name: "micheal",
          data: "26th july 2019",
          title: "Happy apes NFT AMA session",
          user: {
            time: "30m",
            name: "micheal",
            wallet_id: "x02xd....2ed0",
            url: require("@/assets/images/svg/profile-img.svg"),
          },
          audience: {
            images: [
              require("@/assets/images/svg/profile-img.svg"),
              require("@/assets/images/svg/profile-img.svg"),
              require("@/assets/images/svg/profile-img.svg"),
            ],
            no_listener: 320,
          },
          description:
            "Join my AMA Session and ask anything about my new NFT collection Live #TheHappyapescollection #happyapes",
        },
        {
          host_name: "micheal",
          status: "up coming",
          data: "26th july 2019",
          title: "Happy apes NFT AMA session",
          user: {
            time: "30m",
            name: "micheal",
            wallet_id: "x02xd....2ed0",
            url: require("@/assets/images/svg/profile-img.svg"),
          },
          audience: {
            no_listener: 320,
            images: [
              require("@/assets/images/svg/profile-img.svg"),
              require("@/assets/images/svg/profile-img.svg"),
              require("@/assets/images/svg/profile-img.svg"),
            ],
          },
          description:
            "Join my AMA Session and ask anything about my new NFT collection Live #TheHappyapescollection #happyapes",
        },
      ],
    };
  },
};
</script>