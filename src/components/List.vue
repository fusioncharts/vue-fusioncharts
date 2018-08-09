<template>
  <ul class="feature-list">
      <ListItem v-for="(v, i) in values" :key="i" :value="v"/>
  </ul>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'List',
  props:['values'],
  components:{
    ListItem
  }
}
</script>