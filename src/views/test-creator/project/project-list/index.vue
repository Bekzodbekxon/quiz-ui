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
      @row-selected="rowSelected"
      :select-mode="selectMode"
    ></b-table>
    {{ selected }}
  </div>
</template>

<script>
export default {
  name: 'TableBootstrapBasic',
  data() {
    return {
      fields: ['projects'],
      items: [
        { projects: 'Dickerson' },
        { projects: 'Larsen' },
        { projects: 'Geneva' },
      ],
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
      selected: '',
    }
  },
  methods: {
    rowSelected(items) {
      this.selected = items
    },
  },
}
</script>
