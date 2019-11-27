<style>

</style>
<template>
  <div > 
    <button @click="click">点我</button>
    <!--<div v-for="i in info">
      {{i.name}}
    </div>-->
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
        <div class="menu-container" ref="menuContainer">    
          sss
        </div>
    </v-touch>
    <input type="text" v-model="aaa" >
    aaa{{aaa}}<br>
    bbb{{bbb}}
    <div v-for="(value,key,index) in temData">
      <div>{{value}}</div><br>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'Page1',
    data() {
      return {
        info: [],
        aaa:"111",
        bbb:"",
        temData:{
          id:1,
          id1:2,
          id2:3
        }
      }
    },
    methods:{
      click:function(){
        // console.log(this.info,"222222222222222222")
      },
      swiperleft: function () {
        console.log("左划")
      },
      swiperright: function () {
        console.log("右滑")
      }
    },
    watch:{
      aaa(el){
        this.bbb=this.aaa
        console.log(el,"11111111111111")
        console.log(this.aaa,"111111111111")
      }
    }
    // mounted () {
    //   // console.log(this.info,"1111111111111111")
    //   axios
    //     .get('https://www.runoob.com/try/ajax/json_demo.json')
    //     .then((res)=>{
    //       // console.log(res.data.sites,"1111111111111")
    //     })
    //     .catch(function (error) { // 请求失败处理
    //       console.log(error);
    //     });


    //   // axios.post('/user',{
    //   //   firstName: 'Fred',
    //   //   lastName: 'F'
    //   // })
    //   // .then((res)=>{
    //   //   console.log(res)
    //   // })
    //   // .catch((err)=>{
    //   //   console.log(err)
    //   // })
    // }
  }
</script>