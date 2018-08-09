<template>
  
  <div class="side-nav col-3 d-none d-md-block">
      <div class="nav-heading">Quick Demo:</div>
      <div class="nav-list">
          <SampleSliderItem v-for="sample in samples" 
          :key="sample.id"
          :sample="sample" 
          :active="sample.id===activeSample"
          @click="()=>sample.onSampleItemClick(sample.id)" 
          :mobile="false"/>
      </div>
  </div>
</template>

<script>

import SampleSliderItem from './SampleSliderItem';

export default {
  name: 'SamplesSlider',
  props: ['samples', 'activeSample'],
  components: {
    SampleSliderItem
  }
}
</script>

<style>

</style>


