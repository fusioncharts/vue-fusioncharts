import SampleWrapper from './SampleWrapper';
export default {
  data() {
    return {
      sourceData: '',
      sourceHTML: '',
      sourceJS: '',
      selectedPanel: 0,
      panels: []
    };
  },
  methods: {
    selectTab: function(num) {
      this.selectedPanel = num;
    }
  },
  created: function() {
    if (this.sourceSchema) {
      this.panels = [
        { type: 'Javascript', code: this.sourceJS, mode: 'javascript' },
        { type: 'HTML', code: this.sourceHTML, mode: 'htmlembedded' },
        { type: 'Data', code: this.sourceData, mode: 'javascript' },
        { type: 'Schema', code: this.sourceSchema, mode: 'javascript' }
      ];
    } else {
      this.panels = [
        { type: 'Javascript', code: this.sourceJS, mode: 'javascript' },
        { type: 'HTML', code: this.sourceHTML, mode: 'htmlembedded' },
        { type: 'Data', code: this.sourceData, mode: 'javascript' }
      ];
    }
  },
  components: {
    SampleWrapper
  }
};
