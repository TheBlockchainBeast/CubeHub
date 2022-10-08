<template>
  <div class="trending py-4 d-flex flex-column">
    <div class="items">
      <p class="subject mb-0">Elon musk</p>
      <small class="d-block">82K Mentions </small>
    </div>
    <v-btn
      color="secondary"
      class="text-capitalize text-center mx-auto mt-4 load-more-btn"
      depressed
      rounded
      >More Trending
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.trending {
  .items {
    .subject {
      line-height: 1;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
    }
    small {
      color: var(--info);
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