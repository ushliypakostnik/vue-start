<template>
  <Page class="page404">
    <h1>404</h1>
    <h3>Page not found!!!</h3>
  </Page>
</template>

<script>

export default {
  name: 'NotFound',
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .page404 {
    min-height: 100vh;
    text-align: center;

    h1 {
      color: $color_primary;
      margin: 0;
      @include text($font-family_sans, round($font-size_large * 4), $font-weight_sans_bold);
      line-height: 100px;
    }

    h3 {
      margin: 0;
      @include text($font-family_sans, $font-size_large, $font-weight_sans_bold);
    }
  }
</style>
