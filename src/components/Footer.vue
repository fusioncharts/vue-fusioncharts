<template>
  <footer>
    <div class="row">
        <div class="col-12 pt-3">
            <div class="h5">Support</div>
            <p>
                <a class="ref-link" :href="issuesURL" target="_blank">GitHub Issues</a> |
                <a class="ref-link" href="mailto:support@fusioncharts.com" target="_blank">Contact FusionCharts Support</a>
            </p>
        </div>
    </div>
    <!-- licensing footer starts -->
    <div class="row">
        <div class="col-12 pt-3">
            <div class="h5">Licensing</div>
            <p>Vue-FusionCharts module is licensed under open-source, distributed under the terms of the MIT/X11
                License. You will still need to include FusionCharts in your page, as this project provides
                no direct functionality. You can download a free evaluation version
                <a class="ref-link" href="//www.fusioncharts.com/download/" target="_blank">here</a>. To use in a commercial environment, please
                <a class="ref-link" href="//www.fusioncharts.com/buy/" target="_blank">purchase a FusionCharts license</a>.</p>
        </div>
    </div>
    </footer>
</template>

<script>

export default {
  name: 'AppFooter',
  props: ['issuesURL']
}
</script>

<style>

</style>

