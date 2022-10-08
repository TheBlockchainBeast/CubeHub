<template>
  <div class="Notification py-4 d-flex flex-column">
    <div class="list">
      <div class="dot"></div>
      <v-avatar color="primary" size="2.5rem">
        <img src="@/assets/images/svg/profile-img.svg" alt="John" />
        <!-- <v-icon dark> mdi-account-circle </v-icon> -->
      </v-avatar>

      <p>CryptoDEGEN9 added you as a Friend</p>
    </div>

    <v-btn
      color="secondary"
      class="text-capitalize text-center mx-auto mt-4 load-more-btn"
      depressed
      rounded
      >More Notification
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.Notification {
  .list {
    display: flex;
    align-items: center;
    gap: 10px;
    .dot {
      height: 10px;
      width: 10px;
      background: #de547c;
      border-radius: 7px;
    }

    p {
      width: 80%;
      color: #fff;
      line-height: 1.3;
      margin-bottom: 0;
      font-size: 14px;
    }
  }
  .load-more-btn {
    font-size: 13px;
    color: var(--info);
    font-weight: 400;
    border: 1px solid var(--info) !important;
  }
}
</style>