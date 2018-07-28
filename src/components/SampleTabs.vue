
<template>
  <div class="col-md-9 col-12">
      <component :is='componentName' :showMessage='showMessage'></component>
  </div>
</template>

<script>

import SimpleChart from './samples/SimpleChart'
import Pie3dChart from "./samples/Pie3dChart";
import ColumnAreaLineCombiChart from './samples/ColumnAreaLineCombiChart'
import FetchDataFromJsonUrl from './samples/FetchDataFromJsonUrl'
import FetchDataFromXmlUrl from './samples/FetchDataFromXmlUrl'
import UpdateChartData from './samples/UpdateChartData'
import UpdateChartAttribute from './samples/UpdateChartAttribute'
import TriggerEventFromChart from './samples/TriggerEventFromChart'
import PercentageCalculation from './samples/PercentageCalculation'
import ClientSideExport from './samples/ClientSideExport'
import DrillDownChart from './samples/DrillDownChart'
import RenderAWidget from './samples/RenderAWidget'
import RenderAMap from './samples/RenderAMap'
import UsingATheme from './samples/UsingATheme'

import * as utils from './../utils/utils'
import appConfig from './../config/app.config'
import extend from 'extend'
export default {
  name: 'SampleTabs',
  props:['sampleName'],
  data(){
    return {
      showMessage: false,
      message: 'Please wait, sample is loading...',
    }
  },
  computed: {
    componentName: function(){
      return this.sampleName;
    }
  },
  watch: {
  },
  methods: {
    getChartFrame: function() {
      const frame =  window.frames[0];
      return {
        innerWidth: window.frames[0].innerWidth,
        innerHeight: window.frames[0].innerHeight
      }
    }
  },
  created: function(){
    //non reactive props
    this.sampleDataLoadingError = false
    this.sampleDataLoadingErrorMessage = ""
  },
  components: {
    SimpleChart,
    Pie3dChart,
    ColumnAreaLineCombiChart,
    FetchDataFromJsonUrl,
    FetchDataFromXmlUrl,
    UpdateChartData,
    UpdateChartAttribute,
    TriggerEventFromChart,
    PercentageCalculation,
    ClientSideExport,
    DrillDownChart,
    RenderAWidget,
    RenderAMap,
    UsingATheme
  }
}
</script>

<style>

</style>
