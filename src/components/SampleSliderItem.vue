<template>
  <div :class="`nav-item ${active?'selected':''}`" @click="onClick">
      <div v-if="!mobile" class="h5">{{ sample.title }}</div>
      <div v-if="mobile" class="p">{{ sample.title }}</div>
      <div v-if="!mobile" class="p item-desc">{{ sample.desc }}</div>
  </div>
</template>

<script>
export default {
  name:'SampleSliderItem',
  props:['sample','mobile', 'active'],
  methods: {
      onClick: function(){
          this.$emit('click', this.sample)
      }
  }
}
</script>
