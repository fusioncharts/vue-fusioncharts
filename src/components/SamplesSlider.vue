<template>
  <div class="side-nav col-3 d-none d-md-block">
      <div class="nav-heading">Quick Demo:</div>
      <div class="nav-list">
          <div v-for="sample in samples" :key="sample.id" 
          :class="`nav-item ${sample.id===activeSample?'selected':''}`"
          @click="()=>sample.onSampleItemClick(sample.id)">
              <div class="h5">{{ sample.title }}</div>
              <div class="p item-desc">A simple chart with all data embedded into the directive</div>
          </div>
      </div>
  </div>
</template>

<script>

import Slider from 'vue-slick';
import SampleItem from './SampleItem';
import ArrowView from './ArrowView';

export default {
  name: 'SamplesSlider',
  props: ['samples', 'activeSample'],
  data(){
    return {
      lessSlides: null,
      sliderSettings: null,
      leftArrowVisible: false,
      rightArrowVisible: true
    }
  },
  created(){
    // Non reactive variables initialize
    this.slidesToShow = (function() {
      const wH = parseInt(window.innerWidth, 10);
      if (wH < 800) { return 4; } else if (wH < 1000) { return 6; }
      return 7;
    })();
    //bind functions
    // this.nextSlide = this.nextSlide.bind(this);
    // this.prevSlide = this.prevSlide.bind(this);
    // this.afterSlideChange = this.afterSlideChange.bind(this);
    ///////////////

    //reactive variable initialize
    this.leftArrowVisible = false,
    this.rightArrowVisible = this.samples.length > this.slidesToShow
    ////////////////////
    //render
    this.initSlick();
  },
  methods: {
    initSlick: function(){
      this.lessSlides = this.samples.length <= this.slidesToShow;
      this.sliderSettings = {
        infinite: false,
        slidesToShow: this.slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: !this.lessSlides,
        draggable: !this.lessSlides,
        touchMove: !this.lessSlides,
      };
    },
    nextSlide:function() {
      this.$refs.slider.next();
    },

    prevSlide: function() {
      this.$refs.slider.prev();
    },
    afterSlideChange:function(idx) {
      if (idx === 0) {
          this.leftArrowVisibl = false
          this.rightArrowVisible = true
      } else if (idx === this.samples.length - this.slidesToShow) {
          this.leftArrowVisible = true
          this.rightArrowVisible = false
      } else {
          this.leftArrowVisible = true
          this.rightArrowVisible = true
      }
    } 
  },
  components: {
    Slider,
    ArrowView,
    SampleItem
  }
}
</script>

<style>

</style>


