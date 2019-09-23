<template>
  <div class="notifications">
    <span>2</span>
  </div>
</template>

<script>
export default {
  name: 'Notifications',
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  $notifications_height: 18px;

  .notifications {
    align-self: center;
    background: $color_active;
    color: $color_white;
    font-family: $font-family_sans;
    text-align: center;
    border-radius: $notifications_height;
    @include size(22px, $notifications_height);
    @include text($font-family_sans, 12px, $font-weight_sans_bold);
    line-height: $notifications_height;
  }
</style>
