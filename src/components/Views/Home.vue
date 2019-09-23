<template>
  <div class="layout">
    <left-sidebar></left-sidebar>
    <div class="layout__right">
      <top-bar></top-bar>
      <router-view />
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/Views/TopBar.vue';
import LeftSidebar from '@/components/Views/LeftSidebar.vue';

export default {
  name: 'Layout',

  components: {
    LeftSidebar,
    TopBar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    width: 100%;
    height: 100vh;

    &__right {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
