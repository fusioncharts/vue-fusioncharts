
window.loadApp = function (data) {
  Vue.use(VueFusionCharts);

  const app = new Vue({
    el: '#app',
    data: {
      type: 'column2d',
      width: '100%',
      height: '85%',
      dataFormat: 'json',
      dataSource: data
    },
    methods: {
      changeBackgroundColor() {
        const prevDs = Object.assign({}, this.dataSource);
        prevDs.chart.bgColor = '#efefef';
        this.dataSource = prevDs;
      },
      changeCaptionTextAlignment() {
        const prevDs = Object.assign({}, this.dataSource);
        prevDs.chart.captionAlignment = 'left';
        this.dataSource = prevDs;
      }
    }
  });
};
