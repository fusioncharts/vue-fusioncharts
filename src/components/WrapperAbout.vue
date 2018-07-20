<template>
  <div class="wrapper-about">
    <h3>{{ `About ${heading}` }}</h3>
    <p>{{ about }}</p>
  </div>
</template>

<script>

export default {
  name: 'WrapperAbout',
  props: ['heading','about']
};
</script>