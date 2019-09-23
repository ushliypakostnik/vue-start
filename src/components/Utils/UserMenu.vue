<template>
    <div class="user-menu">
      <span class="user-menu__avatar"></span>
      <a href="#" class="user-menu__username">Username</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .user-menu {
    margin-left: 12px;
    display: flex;
    align-items: center;

    &__avatar {
      width: 33px;
      height: 33px;
      border-radius: 50%;
      border: 1px solid $color_border_dark;
      margin-right: 12px;
      @include size(33px, 33px);
    }

    &__username {
      display: flex;
      align-items: center;
      @include link-color($color_text, $color_text);
      @include text($font-family_sans_ui, $font-size_small, $font-weight_sans_ui_regular);

      &::after {
        display: block;
        content: "";
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjE2OSIgaGVpZ2h0PSIzLjk0MyIgdmlld0JveD0iMCAwIDguMTY5IDMuOTQzIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojMzczYTNjO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzEwNi45NDYgLTI0OTgpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTMxMDYuOTQ2LDI0OThoOC4xNjlsLTQuMjczLDMuOTQzWiI+PC9wYXRoPjwvZz48L3N2Zz4=") no-repeat center center;
        background-size: contain;
        margin-left: 18px;
        @include size(9px, 4px);
      }
    }
  }
</style>
