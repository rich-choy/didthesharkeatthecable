<template>
  <div class="add-this-widget">
    <div class="addthis_inline_share_toolbox" />
  </div>
</template>

<style lang="scss">
.add-this-widget {
  position: relative;
  width: 100%;
  margin: 8rem 0;

  .addthis_inline_share_toolbox {
    display: inline-block;
    margin-left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
