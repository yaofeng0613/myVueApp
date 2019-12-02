<style>

</style>
<template>
  <div>
    <div>asdasdasdasdas</div>
    <button @click="click">Send</button>
    子组件值{{text}}
  </div>
</template>
<script>
  import { mapActions, mapMutations } from 'vuex'

  export default {
    props: ['text'],
    // props: {
    //   text:{
    //     type:String,
    //     default: 'cccccccccc'
    //   }
    // },
    name: 'PageSmall4',
    data(){
      return {
        data:11,
        input:'1',
        watch:"watch",
      }
    },
    created() {
      console.log(this.text,"props")
    },
    computed:{

    },
    watch:{
      text(val){
        console.log("父组件props变化了")
      }
    },
    methods: {
      click(){
        this.$emit('transmit',"成功了")
      }
    }
  }
</script>