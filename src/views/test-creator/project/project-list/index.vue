<template>
  <div>
    <b-table
      selectable
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :items="items"
      :fields="fields"
      @row-selected="selectedProject"
      :select-mode="selectMode"
    ></b-table>
  </div>
</template>

<script>
import * as projectServices from '@/services/project'

export default {
  name: 'TableBootstrapBasic',
  data() {
    return {
      fields: ['project'],
      items: [],
      striped: false,
      bordered: false,
      borderless: true,
      outlined: false,
      small: true,
      hover: true,
      head: false,
      dark: false,
      fixed: false,
      onclick: true,
      footClone: false,
      selectMode: 'single',
    }
  },
  methods: {
    selectedProject(items) {
      debugger
      this.$emit('sendData', items[0].id)
    },
  },
  mounted: function () {
    projectServices.list().then(data => {
      this.items = data
    })
  },
}
</script>
