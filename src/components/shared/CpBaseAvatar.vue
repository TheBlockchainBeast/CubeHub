<template>
  <div class="user_avatar d-flex align-center">
    <v-avatar color="primary" size="2.3rem">
      <img :src="user.url" alt="John" />
      <!-- <v-icon dark> mdi-account-circle </v-icon> -->
    </v-avatar>

    <div class="ml-3" v-if="!noLabel">
      <h6 class="mb-0 white--text">{{user.name}} </h6>
      <div class="d-flex">
         <p class="mb-0 info--text">{{user.wallet_id}} </p>
        <p class="mb-0 ml-3 info--text  mt-auto" v-if="user.time">{{user.time}}</p>
      </div>
     
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      default: null,
    },
    user: {
      type: Object,
      required: true,
    },
    noLabel:{
      type: Boolean,
      default:false
    }
  },
};
</script>