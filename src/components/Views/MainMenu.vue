<template>
  <ul class="main-menu">
    <li v-for="(i, index) in items" :key="index" :class="{'--active' : i.id === active}">
      <router-link to="/">{{i.text}}</router-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'MainMenu',

  data() {
    return {
      active: 1,
      items: [
        { id: 1, text: 'Правила начисления' },
        { id: 2, text: 'Купонные правила' },
        { id: 3, text: 'Правила-комплекты' },
        { id: 4, text: 'Персональные акции' },
        { id: 5, text: 'Товарные акции' },
        { id: 6, text: 'Счетчики' },
        { id: 7, text: 'Правила-сообщения' },
        { id: 8, text: 'Коэффициенты' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  $item-height: 56px;

  .main-menu {
    margin: $item-height 0 0 0;
    padding: 0;

    li {
      position: relative;
      padding: 0;
      padding-left: 49px;

      a {
        white-space: nowrap;
        color: $color_gray_98;
        @include text($font-family_sans-ui, $font-size_small, $font-weight_sans-ui_regular);
        line-height: $item-height;
      }

      &.--active {
        a {
          color: $color_white;

          // stylelint-disable-next-line max-nesting-depth
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background: $color_primary;
            @include size(4px, $item-height);
          }
        }
      }
    }
  }
</style>
