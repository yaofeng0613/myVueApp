<style>

</style>
<template>
  <div>
    <div>成功了</div>
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
    beforeCreate (){
      console.log(this.data,"beforeCreate")
    },
    created(){
      console.log(this.data,"createdcreated")
      // console.log(document.body.innerHTML,"innerHTMLinnerHTMLinnerHTML")
    }
  }
</script>