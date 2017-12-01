<template>
  <div class="idb-block">
    <div class="idb-block-title">
      <h2>Wysiwyg Editor</h2>
    </div>
    <div class="idb-block-content">
      <wysiwyg v-model="myHTML" />
    </div>
  </div>
</template>

<style lang="scss">
  .editr--content {
    min-height: 300px;
  }
</style>
<script>
export default {
  data: function () {
    return {
      myHTML: ''
    }
  }
}
</script>
