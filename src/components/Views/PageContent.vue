<template>
  <div class="page-content">
    <div class="container-fluid">
      <h1>Список правил</h1>
      <div class="subheader">
        <h3>В данном разделе отображаются все правила начисления, созданные пользователями </h3>
        <button
          type="button"
          class="btn btn--primary"
        >Новая</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageContent',
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .page-content {
    padding-top: $gutter / 2;
    padding-bottom: $gutter / 2;
  }
</style>
