<style>

</style>
<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="month"
      placeholder="选择日期时间"
      value-format="yyyyMM"
      :editable=false
      :disabled=false
    >
    </el-date-picker>
    <br>
    <el-select v-model="id" filterable placeholder="请选择" clearable="true">
      <el-option v-for="item in options"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      >
      </el-option>
    </el-select>
    <div>{{obj.a}}</div>
    <div><input type="text" v-model="obj.a"/></div>
  </div>
  
</template>
<script>
  export default {
    name: 'Page5',
    data(){
      return {
        value1:new Date(),
        id:1,
        options:[{
          id:1,
          name: '选项一'
        },{
          id:2,
          name: '选项二'
        },{
          id:3,
          name: '选项三'
        }],
        obj: {
          a: 123
        },
      }
    },
    create(){
      console.log(this.value1,"11111111111111111")
    },
    computed:{

    },
    watch:{
      value1(val){
        console.log(this.value1,"11111111111111111")
      },
      obj:{
        handler(newName, oldName){
          console.log("aaaaaaaaaaaa")
        },
        deep:true
      }
    },
    methods: {

    }
  }
</script>