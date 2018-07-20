<template>
  <div
        class="sample-item"
        :style="{ boxShadow, border }"
        :title="data.title"
        role="presentation"
        @click="onClick"
        @mouse-enter="onMouseEnter"
        @mouse-leave="onMouseLeave"
      >
        <div class="sample-logo-container">
          <img
            class="sample-logo"
            :alt="data.title"
            width="100%"
            height="100%"
            :src="src"
          />
        </div>
        <br />
        <span class="sample-title" :style="{ fontWeight }">{{ data.title }}</span>
      </div>
</template>

<script>

export default {
  name:'SampleItem',
  props:['data', 'active'],
  data(){
    return {
      logo: this.data.logo,
      fontWeight: 'normal',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)',
      src: null,
    }
  },
  created(){
    // this.onMouseEnter = this.onMouseEnter.bind(this);
    // this.onMouseLeave = this.onMouseLeave.bind(this);
    // this.onClick = this.onClick.bind(this);
    this.checkIfActive();
  },
  methods:{
    checkIfActive: function(){
      if (this.active) {
        this.src = this.data.logoHover;
        this.fontWeight = 'bold';
        this.boxShadow = '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)';
        this.border = '1px solid #A9A9A9';
      } else {
        this.src = this.logo;
        this.fontWeight = 'normal';
        this.boxShadow = '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)';
        this.border = 'none';
      }
    },
    onMouseEnter: function() {
        this.logo = this.data.logoHover,
        this.fontWeight = 'bold',
        this.boxShadow = '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)'
    },
    onMouseLeave: function() {
        this.logo = this.props.data.logo,
        this.fontWeight = 'normal',
        this.boxShadow = '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'
    },

    onClick: function() {
      this.data.onSampleItemClick(this.data.id);
    }
  },
  watch : {
    active: function(){
      this.checkIfActive();
    }
  }
}
</script>

<style>

</style>




