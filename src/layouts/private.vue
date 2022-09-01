<template>
  <div class="private_layout">
    <CpBaseSidebar />
    <div class="page-container d-flex justify-space-between">
     <div class="w-100">
         <CpBaseHeader />
      <router-view/>
     </div>
       <CpRightSidevar />
    </div>
    
  </div>
</template>

<script>
import CpBaseHeader from "@/components/CpBaseHeader.vue";
import CpBaseSidebar from "@/components/CpBaseSidebar.vue";
import CpRightSidevar from "../components/CpRightSidevar.vue";
export default {
  components: {
    CpBaseHeader,
    CpBaseSidebar,
    CpRightSidevar,
  },
};
</script>