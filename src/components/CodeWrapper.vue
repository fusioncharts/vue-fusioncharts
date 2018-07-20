<template>
    <pre :style="newStyle" :class="`language-${language}`"><code :class="`language-${language}`" v-html="codeHightLighted"></code></pre>
</template>

<script>
import Prism from 'prismjs';
import extend from 'extend'
export default {
  name: 'CodeWrapper',
  props:['styles', 'code', 'language'],
  data(){
    return {
      newStyle:  extend({
        boxSizing: 'border-box',
        margin: 0,
        overflow: 'scroll',
      }, this.styles)
    }
  },
  computed: {
    codeHightLighted: function() {
      return Prism.highlight(this.code, Prism.languages[this.language]);
    }
  }
}
</script>