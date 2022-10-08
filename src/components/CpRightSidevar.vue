<template>
  <div class="right_sidebar">
    <div class="search-field">
      <inline-svg
        :src="require('@/assets/images/svg/search-icon.svg')"
        title=""
      />
      <input type="text" placeholder="Search CubeHub" />
    </div>
    <br />

    <div class="relative">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>