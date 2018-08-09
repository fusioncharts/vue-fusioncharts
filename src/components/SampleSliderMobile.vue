<template>
    <div class="col-12 d-flex justify-content-center d-md-none">
        <div id="mobileChart-selector" class="base-dropdown chart-selector" @click="openModal">
            <div class="selector">{{ selectedSample }}</div>
            <div class="placeholder">Quick Demo:</div>
            <div class="caret">
                <i class="fc_dropdown"></i>
            </div>
        </div>

    <!-- Modal for selection (Only for Mobile Devices) -->
        <div id="myModal" :class="`modal ${modalOpen?'d-block':'d-none'}`" >
            <div class="modal-content">
                <div class="nav-list">
                    <SampleSliderItem v-for="sample in samples" 
                    :key="sample.id"
                    :sample="sample" 
                    :active="sample.id===activeSample"
                    @click="()=>itemClick(sample.onSampleItemClick,sample.id)" 
                    :mobile="true"/>
                </div>
            </div>
        </div>
</div>
</template>

<script>
import SampleSliderItem from './SampleSliderItem'
export default {
    name: 'SampleSliderMobile',
    props: ['samples', 'activeSample'],
    data(){
        return {
            modalOpen: false
        }
    },
    computed: {
        selectedSample: function(){
            for(let i=0;i<this.samples.length;i++){
                if(this.samples[i].id === this.activeSample){
                    return this.samples[i].title
                }
            }
            return 'None'
        }
    },
    methods: {
        openModal: function(){
            this.modalOpen = true
        },
        itemClick: function(callback, arg){
            this.modalOpen = false;
            callback(arg);
        }
    },
    components: {
        SampleSliderItem
    }
}
</script>

<style>

</style>
