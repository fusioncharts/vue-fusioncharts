<template>
  <div class="wrapper-features">
      <h3>Features</h3>
      <div>
        <div class="list-container features-half-left">
          <List :values="featureHalfs[1]" />
        </div>
        <div class="list-container features-half-right">
          <List :values="featureHalfs[1]" />
        </div>
        <div :style="{ clear: 'both' }" />
      </div>
    </div>
</template>

<script>
import List from './List'
export default {
  name: 'WrapperFeatures',
  props: ['features'],
  components: {
    List 
  },
  computed: {
    featureHalfs: function(){
      const features = this.divideFeatureList(this.features);
      return features;
    }
  },
  methods: {
    divideFeatureList: (features)=> {
    let middleIdx;
    // eslint-disable-next-line no-bitwise
    if (features.length & 1) {
      middleIdx = (features.length + 1) / 2;
    } else {
      middleIdx = features.length / 2;
    }
    return [
      features.slice(0, middleIdx),
      features.slice(middleIdx, features.length),
    ];
  }
  }

}
</script>


