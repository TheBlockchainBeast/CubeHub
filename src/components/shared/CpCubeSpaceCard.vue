<template>
  <div class="">
    <div class="cube-space-card mb-4" v-for="(item, idx) in contents" :key="idx">
      <cp-base-avatar :user="item.user"></cp-base-avatar>

      <div class="content d-flex flex-column">
        <p class="white--text">
          {{ item.description }}
        </p>

        <div class="live-stream">
          <div class="">
            <div class="d-flex align-center" v-if="item.status == 'live'">
              <span class="dot"></span> <small class="white--text">Live</small>
            </div>
            <small class="white--text" v-else
              ><i class="fa-solid fa-calendar-days mr-2"></i>6th july 2022
            </small>
          </div>
          <h5 class="white--text py-2">{{ item.title }}</h5>
          <cp-base-avatar-group
            :images="item.audience.images"
            :label="item.audience.no_listener + ' Listening'"
          ></cp-base-avatar-group>
          <cp-base-button color="secondary" size="large" class="my-3"
            >Start Listening
          </cp-base-button>
          <p class="white--text mb-0">Host:Micheal</p>
        </div>

        <p class="info--text mb-0 pt-2 ml-auto d-flex align-items-center">
          <inline-svg
            :src="require('@/assets/images/svg/export-icon.svg')"
            class="pointer mr-2"
            v-if="item.status == 'live'"
            title=""
          />
          Cube Space
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.cube-space-card {
  background: #1f1e3e;
  padding: 18px 12px;
  border-radius: 8px;

  .content {
    padding: 10px 50px 0;

    .live-stream {
      background: var(--primary);
      padding: 10px 30px;
      border-radius: 10px;
      .dot {
        height: 8px;
        width: 8px;
        border-radius: 4px;
        display: block;
        background: #0ae596;
        margin-right: 6px;
      }
    }
  }
}
</style>
