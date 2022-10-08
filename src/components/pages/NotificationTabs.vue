<template>
  <div class="notification-tabs">
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in tabTitle" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
          <Trending></Trending>
      </v-tab-item>

       <v-tab-item >
          <Notification></Notification>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Trending from "./Trending.vue";
import Notification from "./Notification.vue";
export default {
  data() {
    return {
         tab: null,
      tabTitle: ["Trending", "notification"],
    };
  },

  components:{
    Trending,
    Notification
  }
};
</script>

<style lang="scss">
.notification-tabs {
  .v-tab {
    color: #fff !important;
    text-transform: capitalize;
  }
  .v-tabs-slider {
    background-color: var(--primary);
  }
   .theme--light.v-tabs-items {
    background: transparent;
   }
}
</style>