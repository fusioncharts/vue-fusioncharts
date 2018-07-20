<template>
  <div class="tab-content" :style="{ display }">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabContent',
  props:['active'],
  computed: {
    display: function(){
      console.log(this.active);
      return this.active ? 'block' : 'none';
    }
  },
  created: function(){
    console.log(this)
  }
}
</script>

