<template>
  <div id="app">
    <mheader v-if="show"></mheader>
    <router-view></router-view>
  </div>
</template>

<script>
import mheader from './components/mheader'
export default {
  components: {
    mheader
  },
  data () {
    return {
      user: this.$store.state.username
    }
  },
  computed: {
    show () {
      return this.$route.name!='LogIn';
    }
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
