<template>
  <div class="onboarding-page">
    <v-row>
      <v-col cols="5">
        <div class="logo-brand">
          <img src="@/assets/images/svg/cube-logo.svg" alt="" />
        </div>
        <p class="white--text mt-8">
          Join millions of Blockchain enthusiast all over the globe to share
          what's happening in the world of Blockchain, Connect and learn more
          about the crypto space and thus earn.
        </p>
        <div class="action-btn mt-10">
              <router-link to="/register">
          <cp-base-button block class="">Signup</cp-base-button>
        </router-link>
        <router-link to="/login">
          <cp-base-button outlined block class=" mt-5">Login</cp-base-button>
        </router-link>
        </div>
      
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>