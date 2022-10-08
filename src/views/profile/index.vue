<template>
  <div class="profile-page">
    <div class="banner">
      <img src="@/assets/images/png/post-image.png" alt="" />
    </div>
    <v-avatar color="primary" size="7rem" class="profile-image">
      <img :src="require('@/assets/images/svg/profile-img.svg')" alt="John" />
    </v-avatar>

    <div class="d-flex align-center justify-space-between mt-3">
      <div class="">
        <h4 class="white--text mb-0">Micheal</h4>
        <small class="info--text d-block">x02xd....2ed0</small>
      </div>
      <cp-base-button color="secondary" class="info--text" size="small"
        >Add Friend</cp-base-button
      >
    </div>

    <p class="bio white--text">Web 3 Designer who loves crypto and NFTs #WAGMI</p>

    <div class="post-babs">
      <v-tabs v-model="tab" background-color="transparent" color="basil" class="mx-auto">
        <v-tab v-for="item in tabTitle" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="mt-7">
        <v-tab-item>
          <cp-base-post-card></cp-base-post-card>
        </v-tab-item>

        <v-tab-item>
          <cp-base-post-card></cp-base-post-card>
        </v-tab-item>
      </v-tabs-items>
    </div>

    <cp-right-sidevar>
      <notification-tabs></notification-tabs>
      <live-stream></live-stream>
    </cp-right-sidevar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      tabTitle: ["Posts", "Media"],
    };
  },
};
</script>