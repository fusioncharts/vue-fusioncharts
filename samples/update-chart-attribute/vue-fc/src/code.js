
Vue.use(VueFusionCharts);

const myDdataSource = getDataFromSomeWhere();

const app = new Vue({
  el: '#app',
  data: {
    type: 'column2d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDdataSource,
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
    },
  },
});
