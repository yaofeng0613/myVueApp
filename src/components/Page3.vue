<style>

</style>
<template>
  <el-table
    :data="tableData"
    style="width:100%"
  >
    <el-table-column
      prop="date"
      label="日期"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="180"
    >
    </el-table-column>
  </el-table>
</template>
<script>
  import { mapActions, mapMutations } from 'vuex'

  export default {
    name: 'Page2',
    data(){
      return {
        data:11,
        input:'1',
        watch:"watch",
        tableData:[{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市'
        },{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市'
        },]
      }
    },
    computed:{

    },
    watch:{

    },
    methods: {

    }
  }
</script>