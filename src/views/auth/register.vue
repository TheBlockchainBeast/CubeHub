<template>
  <div class="auth-page">
    <v-form>
      <h4 class="primary--text mb-3">Signup</h4>
      <cp-base-input placeholder="E-mail" type="text" />
      <cp-base-input placeholder="Password" type="password" />
      <cp-base-input placeholder="Re-enter Password" type="password" />
       <small class="light--text d-block text-center mt-8"
        >Already have an account? <router-link to="/register">Login</router-link>
      </small>
      <cp-base-button block class="mt-10">Next</cp-base-button>

     
    </v-form>
  </div>
</template>