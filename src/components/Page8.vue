<style>

</style>
<template>
  <div>
    <template>
      <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
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
          return callback(new Error("请输入密码"))
        }else if(value.length<5||value.length>10){
          return callback(new Error("请输入5到10位字符"))
        }
      }
      return {
        ruleForm:{
          pass:""
        },
        rules: {
          pass:[
            {validator:validatePass, trigger: 'blur'}
          ]
        }
      }
    },
    create(){

    },
    mounted(){

    },
    computed:{

    },
    watch:{

    },
    methods: {
      submitForm(ruleForm){
        console.log(this.ruleForm.pass,"pppppppppppppp")
        this.$refs.ruleForm.validate((valid)=>{
          if(valid){
            alert("11")
          }
        })
      }
    }
  }
</script>