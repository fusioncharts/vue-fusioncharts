<template>
  <div :class="`arrow ${className}`" role="presentation" @click="onClickHandler" :style="{ display }">
      <div class="arrow-icon-holder">
        <img class="arrow-icon" :alt="`${dir} arrow`" :src="arrowIcon" />
      </div>
    </div>
</template>

<script>
export default {
  name: 'ArrowView',
  props:['dir','visible','onClick'],
  data(){
    return {

    }
  },
  methods: {
    onClickHandler: function(e) {
      this.$emit('click', e);
    }
  },
  computed: {
    arrowIcon: function(){
      const icon = this.dir === 'left' ? 'left-arrow.svg' : 'right-arrow.svg';
      return require('../assets/images/'+icon);
    },
    className: function(){
      return this.dir === 'left' ? 'arrow-left' : 'arrow-right';
    },
    display: function() {
      return this.visible ? 'block' : 'none'; 
    }
  }
}
</script>

<style>

</style>

