FusionCharts.ready(function() {

    Vue.use(VueFusionCharts);
    
    var myDataSource = {
        chart: {
            caption: "Harry's SuperMart",
            subCaption: "Top 5 stores in last month by revenue",
            numberPrefix: "$",
            theme: "ocean"
        },
        data:[
        {
            label: "Bakersfield Central",
            value: "880000"
        },
        {
            label: "Garden Groove harbour",
            value: "730000"
        },
        {
            label: "Los Angeles Topanga",
            value: "590000"
        },
        {
            label: "Compton-Rancho Dom",
            value: "520000"
        },
        {
            label: "Daly City Serramonte",
            value: "330000"
        }]
    };
    
    
    var app = new Vue({
        el: "#app",
        data: {
            type: "column2d",
            width: "100%",
            height: "100%",
            dataFormat: "json",
            dataSource: myDataSource
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