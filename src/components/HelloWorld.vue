<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }   
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .v-bind{
    width:200px;
    height:200px;
    border:1px solid red;
  }
  .active{
    width:100px;
    height:100px;
  }
  .text-danger{
    background-color:red;
  }
</style>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 v-show="type">{{ aaa }}</h1>
    <h2>Essential Links</h2>
    <!--<div v-for="i in arr">{{i}}{{$index}}</div>-->
    <!--<div v-for="i in json">{{i}}</div>-->
    <!--<div v-for="(key,value) in json">{{key}}=>{{value}}</div>-->
    <!--<div v-for="i in json">{{$key}}=>{{i}}</div>-->

    <input type="text" v-model="res">
    {{res}}
    <button type="button" v-on:click="change">按钮1</button>
    <!--<button type="button" @click="show(10,$event)">按钮2</button>-->
    <button type="button" v-on:click="reverseMessage">按钮2</button>
    <div @keydown="mybody">asdasdasdasdsa</div>
    <div v-html="html"></div>
    <!--<div v-bind:class="{'v-bind':user}"></div>-->
    <div v-bind:id="'aaa'+id">aaaaaa</div>

    <div v-if="see">if显示</div>

    <a v-bind:href="url">url</a>

    <form v-on:click.prevent="onSubmit">aaa</form>

    <div>{{msg | ccc}}</div>

    <!--<div v-bind:class="test">

    </div>-->
    <!--<ol>
      <li v-for="a in sites">
        {{a.name}}
      </li>
    </ol>-->
    <!--<ul>
      <li v-for="(value, key, index) in object">
        {{ index }}.{{ key }}:
        {{ value }}
      </li>
    </ul>-->
    <!--<ul>
      <li v-for="n in 10">
        {{n}}
      </li>
    </ul>-->
    <!--<button @click="counter +=1">增加</button>
    <div>{{counter}}</div>-->
    <!--<button @click="greet('hi')">方法</button>-->

    <!--阻止单击事件冒泡-->
    <!--<a v-on:click.stop="doThis"></a>-->
    <!--提交事件不再重载页面-->
    <!--<form v-on:submit.prevent="onSubmit"></form>-->
    <!--修饰符可以串联-->
    <!--<a v-on:click.stop.prevent="doThat"></a>-->
    <!--只有修饰符-->
    <!--<form v-on:submit.prevent></from>-->
    <!--<input @keyup.enter="submit">-->

    <!--<p>input 元素：</p>
    <input v-model="model" placeholder="编辑我...">
    <p>消息是：{{model}}</p>-->
  
    <!--<input type="radio" value="1" v-model="more">
    <input type="radio" value="2" v-model="more">
    <input type="radio" value="3" v-model="more">

    <span>{{more}}</span>-->


    <select v-model="selected">
      <option value="1">一</option>
      <option value="2">二</option>
      <option value="3">三</option>
    </select>

    <span>选择的网站是{{selected}}</span>
    <input v-focus>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'welcome to Your Vue.js App',
        aaa:"世间安得双全法，不负如来不负卿",
        type:true,
        arr:['a','b','c'],
        json:{
          age:18,
          age2:20,
          age3:30
        },
        res: '欢迎欢迎',
        html:'<button>看我</button>',
        user:true,
        id:111,
        see:true,
        url:"https://www.baidu.com",
        sites: [
          {name:"aaa"},
          {name:"bbb"},
          {name:"ccc"},
        ],
        object: {
          name: '菜鸟教程',
          url: 'http://www.runoob.com',
          dis:"学的是技术"
        },
        test:{
          active:true,
          'text-danger':true
        },
        counter:0,
        model:"双向数据绑定",
        more:[],
        selected:"1"
      }
    },
    filters:{
      ccc: function(value){
        if(!value){
          return '' 
        }else{
          value = value.toString();
          return value.charAt(0).toUpperCase()+value.slice(1)
        }
      }
    },
    directives: {
      // 注册一个局部的自定义指令 v-focus
      focus: {
        // 指令的定义
        inserted: function (el) {
          // 聚焦元素
          el.focus()
        }
      }
    },
    methods:{
      change:function(){
        this.type=!this.type
      },
      show:function(e,$event){
        console.log(e,event)
      },
      mybody:function(){
        alert("成功了")
      },
      onSubmit(){
        alert("sub")
      },
      reverseMessage(){
        this.aaa = this.aaa.split('').reverse().join("");
      },
      greet(s,e){
        console.log(e,"eeeeeeeeee")
        console.log(s,"ssssssssss")
      },
      submit(){
        alert("sub")
      }
    }
  }
</script>


