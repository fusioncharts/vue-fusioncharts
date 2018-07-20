
<template>
  <div :style="style">
    <iframe width="100%" height="100%" :src="url" frameBorder="0">
        Chart could not be loaded due to your browser does not support iframe
    </iframe>
    <span style="display: none">
       {{preventCacheRendering += 1}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'FrameView',
  props:['url', 'style'],
  created: function(){
    this.preventCacheRendering=0
  }
}
</script>

<style>

</style>
