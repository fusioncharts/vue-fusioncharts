<template>

<header class="container header">
    <div class="fc-icon">
      <a :href="wrapperGithubRepoUrl" rel="noreferrer noopener" target="_blank" >
        <img class="fc-logo" alt="FusionCharts" src="../assets/images/fc-logo.png"/>
      </a>
    </div>
    <div class="fc-home">
      <a class="inline-link" href="http://fusioncharts.com/" rel="noreferrer noopener" target="_blank">FusionCharts Home</a>
    </div>
</header>
    
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
      'wrapperGithubRepoUrl': { type: String, required: true }
  }
}
</script>