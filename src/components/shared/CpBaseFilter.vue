<template>
  <div class="info--text cube-filter">
    <i class="fa fa-user pointer" @click="showFilter = !showFilter">hello</i>

    <div class="filter-data" v-if="showFilter">
      <div class="d-flex justify-space-between px-4 py-2 header">
        <p class="info--text mb-0">Filter</p>
        <i class="fa fa-time"></i>
      </div>
      <div class="filter-options">
        <ul
          class="white--text pointer"
          v-for="(list, idx) in filterOptions"
          :key="idx"
        >
          <li v-for="opt in list" :key="opt">{{ opt }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filterOptions: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      showFilter: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.cube-filter {
  position: relative;
  .filter-data {
    min-width: 220px;
    border-radius: 10px;
    background: #1f1e3e;
    position: absolute;
    right: 0;
    z-index: 10;
    box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.2);

    .header {
      border-bottom: 1px solid var(--secondary);
    }

    .filter-options {
      padding: 10px 25px;

      ul {
        padding-left: 0;
        &:not(:last-child) {
          border-bottom: 1px solid rgba(118, 129, 171, 0.1);
        }
        &:last-child {
          margin-top: 14px;
        }
        li {
          list-style: none;
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>