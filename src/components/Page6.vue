<style>

</style>
<template>
  <div>
    <template >
      <div v-for="(item,index) in box" :key="item.key">
        {{item.value}}
      </div>
    </template>
    <!--<div v-for="item in box" :key="item">
      {{item}}
    </div>-->
  </div>
</template>
<script>
  export default {
    name: 'Page5',
    data(){
      return {
        box:[{key:1,value:'one'},{key:2,value:'two'},{key:3,value:'three'}],
        // box:[1,2,3,4,5]
      }
    },
    create(){

    },
    computed:{

    },
    watch:{

    },
    methods: {
      
    }
  }
</script>