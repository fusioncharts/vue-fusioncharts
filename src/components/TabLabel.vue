<template>
    <div class="tab-label" :style="style" role="presentation" @click="onClickHandler">
      {{ text }}
    </div>
</template>

<script>

export default {
  name: 'TabLabel',
  props:['border', 'active', 'click', 'text', 'id'],
  data() {
    return {
      style: null
    }
  },
  created: function(){
    this.checkActive();
  },
  methods:{
    checkActive: function(){
      let bg;
      let borderColor;
      let borderBottomColor;

      if (this.active) {
        bg = '#fff';
        borderColor = '#eeeeee';
        borderBottomColor = this.border ? '#fff' : '#eeeeee';
      } else {
        bg = '#dcdcdc';
        borderBottomColor = '#dcdcdc';
        borderColor = '#dcdcdc';
      }

      this.style = {
        background: bg,
        border: `1px solid ${borderColor}`,
        borderBottom: `1px solid ${borderBottomColor}`,
      };
    },
    onClickHandler: function(){
      this.click(this.id);
    }
  },
  watch:{
    active: function(){
      this.checkActive();
    }
  }
}
</script>

<style>

</style>


