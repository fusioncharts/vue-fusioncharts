<template>
    <div class="clearfix">
        <div class="card shadow">
            <div class="card-body chart-wrapper">
                <div class="chart-wrapper-inner">
                    <slot/>
                </div>
            </div>
        </div>
        <div class="code-view mt-2">
            <div class="card-shadow" style="background: #03040B;">
                <div class="code-nav-btns btn-group" role="group" aria-label="Basic example">
                    <button v-for="(panel,i) in panels" 
                    :class="`btn btn-code ${selectedPanel===i?'selected':''}`" 
                    :key="`btnpanel-${i}`"
                    @click="()=>selectTab(i)">{{ panel.type }}</button>
                </div>
                <div v-for="(panel,i) in panels" 
                :class="`card-body p-0`" 
                :key="`btnpanel-${i}`" :style="`display: ${selectedPanel===i?'block':'none'}`">
                    <div v-if="selectedPanel===i" class="code-panel">
                        <codemirror
                        :code="panel.code"
                        :options="{mode:panel.mode}"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div :styles="{ clear: 'both' }" />
    </div>
</template>

<script>
export default {
    name: 'SampleWrapper',
    props:['panels','activePanel'],
    data() {
        return{
            selectedPanel: this.activePanel
        }
    },
    methods: {
        selectTab: function(num){
            this.selectedPanel = num;
        }
    }
}
</script>
