<template>
  <div class="top-bar container-fluid">
      <breadcrumbs></breadcrumbs>
      <div class="top-bar__controls">
        <notifications></notifications>
        <user-menu></user-menu>
      </div>
    </div>
</template>

<script>
import Breadcrumbs from '@/components/Utils/Breadcrumbs.vue';
import Notifications from '@/components/Utils/Notifications.vue';
import UserMenu from '@/components/Utils/UserMenu.vue';

export default {
  name: 'TopBar',

  components: {
    Breadcrumbs,
    Notifications,
    UserMenu,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .top-bar {
    width: 100%;
    height: $top-bar_height;
    border: 1px solid $color_border;
    display: flex;
    justify-content: space-between;

    &__controls {
      display: inline-flex;
      line-height: $top-bar_height;
    }
  }
</style>
