Vue.use(VueFusionCharts);

const myDataSource = getDataFromSomeWhere();

const app = new Vue({
  el: '#app',
  data: {
    type: 'column2d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource
  }
});
