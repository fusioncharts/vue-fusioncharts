
Vue.use(VueFusionCharts);

const app = new Vue({
  el: '#app',
  data: {
    type: 'maps/usa',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {/* see data tab */}
  }
});
