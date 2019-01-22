<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="h2 mt-2">Usage and integration of FusionTime</div>
      </div>
    </div>
    <FusionTimeIntegration/>
  </div>
</template>

<script>
import FusionTimeIntegration from "./FusionTimeIntegration";
export default {
  name: "FusionTimeUsage",
  components: {
    FusionTimeIntegration
  }
};
</script>

<style>
</style>
