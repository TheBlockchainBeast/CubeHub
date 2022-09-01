<template>
  <div class="auth-page">
    <v-form>
      <h4 class="primary--text mb-3">Setup Account</h4>
      <p class="white--text">Choose a username and profile picture</p>
      <cp-base-input placeholder="Username or E-mail" type="text" />
      <div class="profile-image text-center mt-6">
        <img src="@/assets/images/svg/avatar.svg" alt="" />
        <span class="primary--text d-block">Select Image from your file</span>
      </div>
      <div class="profile-option mt-6 d-flex justify-space-between">
        <img
          src="@/assets/images/svg/avatar.svg"
          alt=""
          v-for="i in 6"
          :key="i"
        />
      </div>
      <cp-base-button block class="mt-10 mb-10">Finish</cp-base-button>
    </v-form>
  </div>
</template>