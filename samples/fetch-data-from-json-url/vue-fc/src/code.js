
Vue.use(VueFusionCharts);

const app = new Vue({
  el: '#app',
  data: {
    type: 'column2d',
    width: 600,
    height: 400,
    dataFormat: 'jsonurl',
    dataSource: 'data.json' /* see data tab */
  }
});
