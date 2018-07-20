

<script>
import TabLabel from './TabLabel';
import TabContent from './TabContent';
import Tab from './Tab';

export default {
  name: 'TabView',
  props:{
    onTabClick: {
      default: function() {
        return () => {}
      }
    },
    border: {

    }
  },
  data(){
    return {
      activeTabId: 0,
      tabLabels: null
    }
  },
  methods: {
    getTabLabels: function() {
      const labels = Object.keys(this.$slots.tab).map((idx)=>{
        const vnode = this.$slots.tab[idx];
        return vnode.data && vnode.data.attrs.label;
      }).filter(v=>v);
      return labels;
    },
    changeTab: function(newId) {
      this.onTabClick(this.activeTabId, newId);
      this.activeTabId = newId;
    }
  },
  computed: {
    style: function(){
      const border = this.border ? '1px solid #eeeeee' : 'none';
      return {
        borderBottom: border,
        borderLeft: border,
        borderRight: border,
      };
    }
  },
  watch: {

  },
  created: function(){
    this.changeTab = this.changeTab.bind(this);
    this.tabLabels = this.getTabLabels();
  },
  render: function(h){
    return(
    <div class="tab-view">
        <div class="tab-labels-container">
        {
            this.tabLabels.map((label, idx) => (
            <TabLabel
              key={idx}
              text={label}
              id={idx}
              border={this.border}
              active={idx === this.activeTabId}
              click={this.changeTab}
            />
            ))
        }
        </div>
        <div class="tab-contents-container" style={this.style}>
          {
            Object.keys(this.$slots.tab).map((idx) =>{
              idx = Number(idx);
              if(!isNaN(idx) && this.$slots.tab[idx]){
                return  (<TabContent key={idx} active={idx === this.activeTabId}> {this.$slots.tab[idx]} </TabContent>)
              }
            })
          }
        </div>
      </div>
    );
    
  },
  components: {
    Tab,
    TabLabel,
    TabContent
  }
}
</script>

<style>

</style>
