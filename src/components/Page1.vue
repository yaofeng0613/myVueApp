<style>

</style>
<template>
  <div > 
    <button @click="click">点我</button>
    <!--<div v-for="i in info">
      {{i.name}}
    </div>-->
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'Page1',
    data() {
      return {
        info: []
      }
    },
    methods:{
      click:function(){
        // console.log(this.info,"222222222222222222")
      }
    },
    mounted () {
      // console.log(this.info,"1111111111111111")
      axios
        .get('https://www.runoob.com/try/ajax/json_demo.json')
        .then((res)=>{
          // console.log(res.data.sites,"1111111111111")
        })
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });


      // axios.post('/user',{
      //   firstName: 'Fred',
      //   lastName: 'F'
      // })
      // .then((res)=>{
      //   console.log(res)
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })
    }
  }
</script>