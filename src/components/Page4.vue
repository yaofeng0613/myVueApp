<style>

</style>
<template>
  <!--<el-row class="tac">
    <el-col :span="6">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1">选项一</el-menu-item>
          <el-menu-item index="1-2">选项二</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航二</span>
          </template>
          <el-menu-item index="1-1">选项一</el-menu-item>
          <el-menu-item index="1-2">选项二</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>-->
  <child text="111" @transmit="tran"></child>
</template>
<script>
  import { mapActions, mapMutations } from 'vuex'
  import child from './PageSmall4'
  export default {
    components: {
      child
    },
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
          address: '上海萨达萨达撒撒 市'
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
      tran(val){
        alert(val,"11111111111111111")
      }
      // handleOpen(key, keyPath){
      //   console.log(key, keyPath);
      // },
      // handleClose(key, keyPath){
      //   console.log(key, keyPath);
      // }
    }
  }
</script>