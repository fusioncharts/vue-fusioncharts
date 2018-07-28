<template>
  <li>
      <span>
          <i class="icn-inline icn-success fc_select"></i>
      </span>
      <div> {{value }}</div>
  </li>
</template>

<script>
export default {
  name:'ListItem',
  props:['value']
}
</script>
