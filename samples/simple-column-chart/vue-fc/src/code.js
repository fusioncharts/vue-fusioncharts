
Vue.use(VueFusionCharts);

const myDataSource = getDataFromSomeWhere();

const app = new Vue({
  el: '#app',
  data: {
    type: 'column2d',
    width: '400',
    height: '350',
    dataFormat: 'json',
    dataSource: myDataSource
  }
});
