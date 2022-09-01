<template>
  <div class="">
    <v-row>
      <v-col cols="4">
         <cp-base-input  placeholder="Password" type="password"  />
         <cp-base-button block>Next</cp-base-button>
      </v-col>
    </v-row>

   
    <hello-world />
  </div>
</template>

<script>
import CpBaseInput from "@/components/global/CpBaseInput.vue";
import HelloWorld from "../components/HelloWorld";
import CpBaseButton from '@/components/global/CpBaseButton.vue';

export default {
  name: "Home",

  components: {
    HelloWorld,
    CpBaseInput,
    CpBaseButton
  },
};
</script>
