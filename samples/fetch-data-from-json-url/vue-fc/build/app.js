
window.loadApp = function () {
  Vue.use(VueFusionCharts);

  const app = new Vue({
    el: '#app',
    data: {
      type: 'column2d',
      width: '100%',
      height: '100%',
      dataFormat: 'jsonurl',
      dataSource: '../../data.json'
    }
  });
};
