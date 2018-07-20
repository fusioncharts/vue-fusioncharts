<template>
  <div :style="this.styles" class="vertical-line" />
</template>

<script>
export default {
  name:'VerticalLine',
  props: {
    'styles': { type: Object}
  }
}
</script>
