<template>
  <div>
    <div>
      <div class="row">
        <div class="col-xl-4 col-lg-12">
          <div class="card">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <projects-list v-on:sendData="updateData($event)"/>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-12">
          <div class="card">
            <div class="card-header">
              Quizes
            </div>
            <div class="card-body">
<!--              <strong>Quizzes</strong>-->
              <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data" size="small">
                <a slot="name" slot-scope="text" href="javascript:;">{{ text }}</a>
              </a-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectsList from '../project/project-list'

import * as QuizServices from '@/services/quiz'

const columns = [{
  id: 'Id',
  dataIndex: 'id',
  scopedSlots: { customRender: 'id' },
}, {
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Created Date',
  dataIndex: 'createdDate',
}, {
  title: 'Description',
  dataIndex: 'description',
}, {
  title: 'ProjectName',
  dataIndex: 'projectName',
}]
const data = []

export default {
  components: {
    ProjectsList,
  },
  data() {
    return {
      data,
      columns,
      header: 'Vue Top Artists',
      projectId: 'default',
    }
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
          },
        }),
      }
    },
  },
  methods: {
    toggleHeader(x) {
      this.header = x
    },
    updateData: function (anotherProject) {
      debugger
      this.projectId = anotherProject
      QuizServices.getQuizByProjectId(this.projectId).then(value => {
        debugger
        this.data = value
      })
    },
  },
}
</script>
