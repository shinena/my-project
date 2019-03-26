<template>
  <a class="tab-item external">
    <router-link :to="path" :activeClass="'active'">
      <span class="icon" :class="iconClass"></span>
      <span class="tab-label" v-text="label"></span>
    </router-link>
  </a>
</template>
<script>
export default {
  props: {
    path: '',
    icon: '',
    label: ''
  },
  computed: {
    iconClass () {
      return 'icon-' + this.icon
    }
  },
  methods: {
  }
}
</script>
<style>
 a{
    text-decoration: none;
  }
  .tab-item, .tab-item a{
    background-color: #efefef;
    flex: 1;
    color:#000;
  }
.tab-item .active{
    /*background:#00aaff;*/
    color: #fa0;
    background-color: fff;
  }
</style>
