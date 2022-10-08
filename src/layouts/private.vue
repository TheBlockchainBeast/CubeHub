<template>
  <div class="private_layout">
    <CpBaseSidebar />
    <div class="page-container d-flex justify-space-between">
      <div class="px-4 inner-container">
        <CpBaseHeader />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import CpBaseHeader from "@/components/CpBaseHeader.vue";
import CpBaseSidebar from "@/components/CpBaseSidebar.vue";
export default {
  components: {
    CpBaseHeader,
    CpBaseSidebar,
  },
};
</script>