FusionCharts.ready(function() {

    Vue.use(VueFusionCharts);
    
    // Load datasource from data.json
    var dataSource = getDataSource(); 
    
    var app = new Vue({
        el: "#app",
        data: {
            type: "column2d",
            width: 600,
            height: 400,
            dataFormat: "json",
            dataSource: dataSource
        },
        methods: {
            updateData: function() {
                var prevDs = Object.assign({}, this.dataSource);
                prevDs.data[2].label = "Art Supply Store";
                prevDs.data[2].value = "420000";
                prevDs.data[3].label = "P.C. Richard & Son";
                prevDs.data[3].value = "210000";
                this.dataSource = prevDs;
            }
        }
    });
    
});