<template>
  <div id="app" class="banner">
    <div class="headContainer">
        <div class="headCont">
          <div class="headLogo">Beauty World</div>
          <!--使用指令v-link进行导航-->
          <div class="headBanner">
            <li v-for="(item,i) in banners" v-on:click="selected(item.name)" :key="i">
              <router-link class="listItem" :class="{active:curBanner == item.name}" :to="{name: item.name}" exact>{{item.title}}</router-link>
            </li>
          </div>
        </div>
      </div>
      <div class="bodyContainer">
        <div class="bodyCont">
            <!--用于渲染匹配的组件-->
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
      <bar class="bar bar-tab">
        <bar-item v-for="(item,i) in banners" :key="i"  :path="'/'+item.name" :label="item.title" :icon="item.name"></bar-item>
      </bar>
  </div>
</template>

<script>
import Router from './router/index.js'
import Bar from './components/Bar/Bar'
import BarItem from './components/Bar/BarItem'
export default{
  components: {
    Router, Bar, BarItem
  },
  name: 'app',
  data: function () {
    return {
      banners: [{
        id: 'Home',
        name: 'Home',
        title: '首页'
      }, {
        id: 'List',
        name: 'List',
        title: '世界'
      }, {
        id: 'About',
        name: 'About',
        title: '关于'
      }],
      curBanner: 'Home'
    }
  },
  methods: {
    selected: function (seclctedName) {
      this.curBanner = seclctedName
    }
  }
}
</script>

<style scoped>
  .banner{
    height:100%;
    display: block;
  }
  .headContainer{
    height: 50px;
    background-color:#333;
  }
  .headCont{
    height: 50px;
  }
  .headContainer .headLogo{
    width: calc(100% - 280px);
    height: 50px;
    /*float: left;*/
    display: inline-block;
    font-size: 34px;
    padding-left: 20px;
    text-align: center;
    vertical-align: top;
    color: #fff;
    text-shadow: 4px 3px 3px #fa0;
    line-height: 50px;
    font-family: "Lucida Calligraphy";
  }
  .headBanner li{
    float: left;
    display: table;
  }

  .headContainer .headBanner{
    width: 240px;
    /*float: left;*/
    display: inline-block;
    text-align: right;
    height: 50px;
    line-height: 50px;
  }
  a{
    text-decoration: none;
  }
  .listItem{
    font-size: 14px;
    color: #fff;
    height: 30px;
    line-height: 30px;
    padding: 4px 10px;
    margin: 0 6px;
    cursor: pointer;
  }
  .listItem:hover{
    font-size: 16px;
  }
  .headBanner li a:hover{
    font-size: 16px;
    /*background:#00aaff;*/
  }
  .headBanner li a:active{
    background:#00aaff;
  }

  .active{
    /*background:#00aaff;*/
    color: #fa0;
  }

  .bodyContainer{
    height: calc(100% - 50px);
  }

  .bodyCont{
    background: #fff;
    height: 100%;
  }
  /*.router-link-active{*/
    /*!*background:#00aaff;*!*/
    /*color: #fa0;*/
  /*}*/
  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
