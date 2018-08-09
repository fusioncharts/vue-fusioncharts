<template>
    <div class="container container-1200 info-wrapper pb-3">
        <div class="row">
            <div class="col">
                <div class="h2 mt-2">Features</div>
                <!-- list start -->
                <div class="row">
                    <div class="col-md-6">
                        <List :values="featureHalfs[0]" />
                    </div>
                    <div class="col-md-6">
                        <List :values="featureHalfs[1]" />
                    </div>
                </div>
                <!-- list end -->
            </div>
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


