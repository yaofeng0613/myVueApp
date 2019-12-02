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

    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <!--<el-input v-model="input" placeholde="请输入内容"></el-input>-->
    <!--<el-input v-model="watch" placeholde="aaa"></el-input>-->
    <input v-model="watchData"></input>
    {{watchData}}
    {{input}}
    <!--<button @click="create(10)">计算函数</button>-->
    {{todos}}
    {{b}}
    {{add}}
  </div>
</template>
<script>
  import { mapActions, mapMutations } from 'vuex'

  export default {
    name: 'Page2',
    data(){
      return {
        data:11,
        input:'1',
        watchData:"watch",
        add1:100,
        add2:200
      }
    },
    computed:{
      b:function(){
        return this.data+1
      },
      todos:function(){
        return this.$store.getters.done
      },
      add:function(){
        return this.add1 + this.add2
      }
    },
    watch:{
      watchData(el){
        this.input = this.watchData
      }
    },
    methods: {
      ...mapMutations(['mutationsAddCount','mutationsReduceCount']),
      add(n){
        this.mutationsAddCount(n)
        // this.$store.commit('mutationsAddCount',n)
      },
      reduce(n){
        this.mutationsReduceCount(n)
        // this.$store.commit('mutationsReduceCount',n);
      },
      ...mapActions(['actionAddCount','actionReduceCount']),
      actionAdd(n){
        this.actionAddCount(n)
        // this.$store.dispatch('actionAddCount',n);
      },
      actionReduce(n){
        this.actionReduceCount(n)
        // this.$store.dispatch('actionReduceCount',n);
      },
      create(n){
        this.$store.getters("getterCount",n)
      }
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