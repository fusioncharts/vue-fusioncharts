<template>

  <div class="demo bg-light-purple pt-4 pb-4">
        <div class="container container-1200 info-wrapper">
        <div class="row">
          <SamplesSlider :samples="samples" :activeSample="sampleId" />
          <SampleTabs
            :sampleName="samplesConfig.sampleRouteMapping[sampleId]"
            :interactiveViewURL="samplesConfig.sampleProps[sampleId].interactiveViewURL[wrapperName]"
            :wrapperName="wrapperName"
          />
        </div>
    </div>
  </div>
</template>

<script>

import appConfig from './../config/app.config'

import SamplesSlider from './SamplesSlider'
import SampleTabs from './SampleTabs';
import sampleConfig from '../config/sample.config';

export default {
  name: 'SamplesViewer',
  props:['samplesConfig', 'wrapperName'],
  data(){
    return {
      sampleId: null,
      emptySamples: false
    }
  },
  computed: {

  },
  created: function(){
    //non-reactive variables
    this.sampleIds = this.getSampleIds();
    this.samples = this.getSamples();
    this.appConfig = appConfig;
    //////////////////
    if (this.sampleIds.length === 0) { 
      this.emptySamples = true; 
    }
    //set inital data
    this.sampleId = this.sampleIds[0];
  },
  methods: {
    changeSampleId: function(newId) {
        this.sampleId = newId;
    },
    getSampleIds: function() {
      const sConfig = this.samplesConfig;
      return Object.keys(sConfig.sampleRouteMapping).map(Number).sort((a, b) => a - b);
    },

    getSamples: function() {
      const sConfig = this.samplesConfig;
      const samples = this.sampleIds.map((sampleId) => {
        console.log(sConfig.sampleImages['logo-hover'][sampleId]);
        return {
          id: sampleId,
          title: sConfig.sampleProps[sampleId].title,
          logo: sConfig.sampleImages.logo[sampleId],
          logoHover: sConfig.sampleImages['logo-hover'][sampleId],
          onSampleItemClick: this.changeSampleId,
        };
      });
      return samples;
    }
  },
  components: {
    SamplesSlider,
    SampleTabs
  }
}
</script>

<style>

</style>

