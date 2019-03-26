<template>
  <div class="content">
    <div class="title">我是世界，世界，世界</div>
    <ul class="list">
      <li v-for="(item,i) in banners" v-on:click="selected(item.name)" :key="i">
        <router-link :class="{active:curBanner == item.name}"  :to="{name: item.name}" exact>{{item.title}}</router-link>
      </li>
    </ul>
    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      banners: [{
        id: 'Travel',
        name: 'Travel',
        title: '我是旅游'
      }, {
        id: 'Read',
        name: 'Read',
        title: '我是读书'
      }, {
        id: 'Photo',
        name: 'Photo',
        title: '我是摄影'
      }],
      curBanner: 'Travel'
    }
  },
  methods: {
    selected: function (seclctedName) {
      this.curBanner = seclctedName
    }
  }
}
</script>
