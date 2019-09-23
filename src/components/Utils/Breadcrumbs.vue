<template>
  <ul class="breadcrumbs">
    <li v-for="(bc, index) in breadcrumbs" :key="index">
      <router-link to="/">{{bc.text}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Breadcrumbs',

  data() {
    return {
      breadcrumbs: [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Правила начисления' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .breadcrumbs {
    margin: 0;
    padding: 0;
    display: inline-flex;
    height: 100%;
    align-items: center;

    li {
      a {
        white-space: nowrap;
        vertical-align: middle;
        @include text($font-family_sans_ui, $font-size_xsmall, $font-weight_sans_ui_regular);
      }

      &::after {
        vertical-align: middle;
        content: "/";
        font-family: $font-family_sans;
        color: $color_gray_777;
        margin: 0 7px;
      }

      &:last-child::after {
        content: "";
      }
    }
  }
</style>
