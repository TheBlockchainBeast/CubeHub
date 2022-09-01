<template>
  <div class="public-layout d-flex align-center">
    <div class="pattern">
      <img src="@/assets/images/svg/pattern.svg" alt="" />
    </div>
    <div class="public-container">
      <slot />
    </div>
    <div class="icon-pallet">
        <img src="@/assets/images/svg/icon-pallet2.svg" alt="">
         <img src="@/assets/images/svg/icon-pallet.svg" alt="">
    </div>
  </div>
</template>