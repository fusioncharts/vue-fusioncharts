
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
      updateData() {
        const prevDs = Object.assign({}, this.dataSource);
        prevDs.data[2].label = 'Art Supply Store';
        prevDs.data[2].value = '420000';
        prevDs.data[3].label = 'P.C. Richard & Son';
        prevDs.data[3].value = '210000';
        this.dataSource = prevDs;
      }
    }
  });
};
