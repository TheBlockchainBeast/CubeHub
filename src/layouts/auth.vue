<template>
  <div class="auth-section d-flex align-center justify-center">
    <div class="pattern">
      <img src="@/assets/images/svg/pattern.svg" alt="" />
    </div>
    <div class="auth-container">
      <div class="logo-brand text-center">
        <img src="@/assets/images/svg/cube-logo.svg" alt="" />
      </div>
      <div class="main">
         <slot />
      </div>
     
    </div>
  </div>
</template>