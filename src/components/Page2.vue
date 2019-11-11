<style>

</style>
<template>
  <div id="my">
    <!--<div>成功了</div>-->
    <input v-model="data"/>
    <!--<div>{{data}}</div>-->
    <div>{{$store.state.count}}</div>
    <button @click="add(10)">增加</button>
    <button @click="reduce(10)">减少</button>
    <button @click="actionAdd(10)">异步增加</button>
    <button @click="actionReduce(10)">异步减少</button>
    <!--<button @click="create(10)">计算函数</button>-->
    {{todos}}
  </div>
</template>
<script>
  export default {
    name: 'Page2',
    data(){
      return {
        data:"11"
      }
    },
    computed:{
      todos:function(){
        return this.$store.getters.done
      }
    },
    methods: {
      add(n){
        this.$store.commit('mutationsAddCount',n)
      },
      reduce(n){
        this.$store.commit('mutationsReduceCount',n);
      },
      actionAdd(n){
        this.$store.dispatch('actionAddCount',n);
      },
      actionReduce(n){
        this.$store.dispatch('actionReduceCount',n);
      },
      // create(n){
      //   this.$store.getters("getterCount",n)
      // }
    },
    // beforeCreate (){
    //   console.log(this.data,"beforeCreate")
    // },
    // created(){
    //   console.log(this.data,"createdcreated")
    //   console.log(document.body.innerHTML,"innerHTMLinnerHTMLinnerHTML")
    // },
    beforeMount(){
      // console.log(document.body.innerHTML,"before")
    },
    mounted(){
      // console.log(document.body.innerHTML,"mountedmountedmountedmountedmountedmounted")
    },
    beforeUpdate(){
      // console.log(document.body.innerHTML,"before")
    },
    updated(){
      // console.log(document.body.innerHTML,"updateupdateupdateupdate")
    }
  }
</script>