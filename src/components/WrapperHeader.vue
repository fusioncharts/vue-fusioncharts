<template>
  <div class="wrapper-header">
    <div class="inline-block" :style="{ marginBottom: 10 }">
      <div class="wrapper-logo-container">
        <img class="wrapper-logo" :alt="heading" :src="logo" :title="heading" />
      </div>
      <VerticalLine :styles="{ height: '25px', marginTop: '5px' }" />
      <div class="heading-container">
        <h1 class="heading">{{ heading }}</h1>
      </div>
    </div>
    <br />
    <div class="inline-block">
      <p class="sub-heading">{{ subHeading }}</p>
    </div>
  </div>
</template>

<script>
import VerticalLine from './VerticalLine'
import images from './../config/images'
export default {
  name:'WrapperHeader',
  components: {
    VerticalLine
  },
  props: [
    'logo',
    'heading',
    'subHeading'
  ]
}
</script>
