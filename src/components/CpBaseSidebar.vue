<template>
  <div class="app_sidebar">
    <div class="contents d-flex flex-column">
      <div class="logo-brand mt-5">
        <img src="@/assets/images/svg/cube-logo.svg" alt="" />
      </div>

      <div class="user d-flex align-center">
        <v-avatar color="primary" size="2.7rem">
          <img src="@/assets/images/svg/profile-img.svg" alt="John" />
          <!-- <v-icon dark> mdi-account-circle </v-icon> -->
        </v-avatar>

        <div class="ml-2">
          <h6 class="mb-0 white--text">Michael</h6>
          <p class="mb-0 info--text">x02xd....2ed0</p>
        </div>
      </div>

      <div class="links">
        <router-link :to="link.to" v-for="link in links" :key="link.name" class="d-flex align-center">
              <inline-svg :src="link.icon" title="My Image" />
              <p class="ml-3 mb-0">{{link.name}} </p>
        </router-link>
      
      </div>

      <div class="logout d-flex align-center mt-auto">
         <inline-svg :src="require('@/assets/images/svg/logout-icon.svg')" title="My Image" /> 
           <p class="mb-0 ml-3 info--text"> Logout</p>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Home",
          icon: require("@/assets/images/svg/home-icon.svg"),
          to: "/",
        },
        {
          name: "Cube Space",
          icon: require("@/assets/images/svg/cube-space-icon.svg"),
          to: "/cube-space",
        },
        {
          name: "Chat",
          icon: require("@/assets/images/svg/chat-icon.svg"),
          to: "/chat",
        },
        {
          name: "Profile",
          icon: require("@/assets/images/svg/user-icon.svg"),
          to: "/profile",
        },
        {
          name: "Settings",
          icon: require("@/assets/images/svg/gear-icon.svg"),
          to: "/settings",
        },
      ],
    };
  },
};
</script>