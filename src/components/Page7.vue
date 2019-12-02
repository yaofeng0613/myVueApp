<style>

</style>
<template>
  <div>
    <template>
      <div style="margin:0 auto;width:35%;margin-top:5%">
        <el-form :model="ruleForm"  :rules="rules" ref="formRef" label-width="80px">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="即使配送" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="美食" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上赞助"></el-radio>
              <el-radio label="线下免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('ruleForm')">立即创建</el-button>
            <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'Page7',
    data(){
      const validatePass = (rule, value, callback) => {
        if(value===""){
          return callback(new Error("请输入"))
        }
      }
      return {
       ruleForm:{
         name:"",
         region:"",
         delivery:false,
         type:[],
         resource:[]
       },
       rules: {
        name:[
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        type:[
          { type: 'array', required:true, message:"请至少选择一个活动", trigger: 'change'}
        ],
        resource:[
          { required:true, message:"请至少选择一个资源", trigger: 'change'}
        ]
       }
      }
    },
    create(){

    },
    mounted(){
      console.log(this.ruleForm.type,"typetypetypetype")
    },
    computed:{

    },
    watch:{

    },
    methods: {
      onSubmit(ruleForm){
        this.$refs.formRef.validate((valid)=>{
          if(valid){
            alert("1111")
          }else{
            return false
          }
        })
        console.log(JSON.stringify(this.ruleForm.type),"typetypetypetype")
      },
      resetForm(ruleForm){
        this.$refs.formRef.resetFields();
      }
    }
  }
</script>