<template>
  <div class="auth-page">
    <v-form>
      <h4 class="primary--text mb-3">Login</h4>
      <cp-base-input placeholder="Username or E-mail" type="text" />
      <cp-base-input placeholder="Password" type="password" />
      <cp-base-button block class="mt-10">Login</cp-base-button>

      <small class="light--text d-block text-center mt-14">Don’t have an account? <router-link to="/register" >Signup</router-link> </small>
    </v-form>
  </div>
</template>