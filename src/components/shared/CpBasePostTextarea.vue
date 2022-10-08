<template>
  <div class="mb-10 d-flex ">
    <v-avatar color="primary mr-6" size="2.3rem">
      <img src="@/assets/images/svg/profile-img.svg" alt="John" />
      <!-- <v-icon dark> mdi-account-circle </v-icon> -->
    </v-avatar>

    <div class="w-100">
      <v-textarea
      rows="3"
        hide-details="auto"
        color="secondary--light"
        background-color="secondary--light"
        placeholder="Whats happening?"
      ></v-textarea>

      <div class="d-flex justify-space-between px-5 py-3">
        <div class="d-flex ">
          <img src="@/assets/images/svg/upload-image-icon.svg" class="mr-3 pointer" alt="" />
          <img src="@/assets/images/svg/upload-gif-icon.svg" class=" pointer" alt="" />
        </div>
        <cp-base-button>Post</cp-base-button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" >
.v-textarea {
  border: none !important;
  border-radius: 8px;
  padding-top: 0;
  textarea {
    color: #fff !important;
    padding: 15px 20px !important;

    &::placeholder {
      color: var(--info) !important;
    }
  }
}
</style>