
import SampleWrapper from './SampleWrapper'
export default {
    data(){
        return {
            sourceData:'',
            sourceHTML:'',
            sourceJS:'',
            selectedPanel: 0,
            panels: [
            ]
        }
    },
    methods: {
        selectTab: function(num){
            this.selectedPanel = num;
        }
    },
    created: function(){
        this.panels = [
            {type: 'Javascript', code: this.sourceJS},
            {type: 'HTML', code: this.sourceHTML},
            {type: 'Data', code: this.sourceData}
        ]
    },
    components:{
        SampleWrapper
    }
}