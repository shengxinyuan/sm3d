<template>
  <div id="app">
    <router-link :to="v.path" v-for="(v, i) in routes.filter((v, i) => i > 0)" :key="i" tag="div" class="item">
      {{v.name}}
    </router-link>
    <a href="/design.html">design.html</a>
    <a href="/share.html">share.html</a>
  </div>
</template>

<script>
  import {routes} from '../router/index'
  export default {
    components: {
    },
    data() {
      return {
        routes: routes
      }
    },
    computed: {
    },
    methods: {
      methodAAAA () {
        
      }
    }
  }

</script>

<style lang="scss">
.item {
  margin: 2rem;
}
</style>
