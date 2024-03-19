<template>
  <div id="app2">
    <Header/>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: { Header }
}


</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
