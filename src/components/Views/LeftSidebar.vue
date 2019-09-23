<template>
  <div class="sidebar" :class="{'sidebar--min' : toggle}">
    <a
      href="#"
      class="sidebar__burger"
      @click.prevent="toggle=!toggle">
      <Navbar />
    </a>
    <div class="sidebar__logo">
      <router-link to="/">LOYALTY</router-link>
    </div>
    <main-menu></main-menu>
  </div>
</template>

<script>
import MainMenu from '@/components/Views/MainMenu.vue';
// import Logo from "@/components/Utils/Elements/Logo.vue";
import Navbar from '@/components/Utils/Elements/Navbar.vue';

export default {
  name: 'LeftSidebar',

  components: {
    MainMenu,
    Navbar,
    // Logo,
  },

  data() {
    return {
      toggle: false,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .sidebar {
    overflow: hidden;
    min-width: $left-sidebar_width;
    width: $left-sidebar_width;
    background: $color_dark;
    will-change: min-width, width;
    @include transitions(min-width, width);

    &--min {
      min-width: $left-sidebar_width_min;
      width: $left-sidebar_width_min;
    }

    &__burger {
      position: absolute;
      left: 12px;
      top: 15px;

      svg {
        fill: $color_primary;
      }

      &:hover svg,
      &:active svg {
        fill: $color_primary_dark;
      }
    }

    &__logo {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: $top-bar_height;
      padding-left: $top-bar_height;
      background: $color_white;

      a {
        position: relative;
        top: -2px;
        @include link-color($color_link, $color_link-hover);
        @include text($font-family_sans_ui, 20px, $font-weight_sans_ui_regular);
      }

      /* for okd logo
      svg {
        width: 160px;
        margin-left: 10px;
        margin-top: 5px;
      } */
    }
  }
</style>
