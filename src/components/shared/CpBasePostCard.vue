<template>
  <div class="post_card">
    <cp-base-avatar :user="user"></cp-base-avatar>

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
          <inline-svg
            :src="require('@/assets/images/svg/comment-icon.svg')"
            class="pointer"
            title=""
          />
          <p class="mb-0 ml-1 info--text">200</p>
        </div>
        <div class="d-flex mr-7">
          <inline-svg
            :src="require('@/assets/images/svg/heart-icon.svg')"
            class="pointer"
            title=""
          />
          <p class="mb-0 info--text ml-1">13k</p>
        </div>
        <div class="d-flex">
          <inline-svg
            :src="require('@/assets/images/svg/export-icon.svg')"
            class="pointer"
            title=""
          />
          <p class="mb-0 info--text ml-1">40</p>
        </div>
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
    };
  },
};
</script>

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