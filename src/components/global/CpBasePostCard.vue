<template>
  <div class="post_card">
    <div class="user d-flex align-center">
      <v-avatar color="primary" size="2.3rem">
        <img src="@/assets/images/svg/profile-img.svg" alt="John" />
        <!-- <v-icon dark> mdi-account-circle </v-icon> -->
      </v-avatar>

      <div class="ml-2">
        <h6 class="mb-0 white--text">Michael</h6>
        <p class="mb-0 info--text">x02xd....2ed0</p>
      </div>
      <p class="mb-0 ml-3 info--text align-self-end">30m</p>
    </div>

    <div class="post">
      <p class="white--text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat rerum
        eius, doloremque, id hic modi perferendis repellendus harum corporis
        sunt cupiditate possimus officiis libero suscipit itaque recusandae quo
        commodi ducimus!
      </p>
      <img src="@/assets/images/png/post-image.png" class="post-image" alt="" />

      <div class="d-flex pt-3">
        <div class="d-flex mr-7">
          <img src="@/assets/images/svg/comment-icon.svg" class="mr-1 pointer" alt="" />
          <p class="mb-0 info--text">200</p>
        </div>
        <div class="d-flex mr-7">
          <img src="@/assets/images/svg/heart-icon.svg" class="mr-1 pointer" alt="" />
          <p class="mb-0 info--text">13k</p>
        </div>
        <div class="d-flex">
          <img src="@/assets/images/svg/export-icon.svg" class="mr-1 pointer" alt="" />
          <p class="mb-0 info--text">40</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.post_card {
  background: #1f1e3e;
  padding: 18px 12px;
  border-radius: 8px;
  .user {
    h6 {
      font-size: 15px;
      font-weight: 500;
      line-height: 1.3;
    }

    p {
      font-size: 14px;
      line-height: 1;
    }
  }

  .post {
    padding: 10px 50px;
    p {
      line-height: 1.4;
      font-size: 14px;
    }

    .post-image {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
}
</style>