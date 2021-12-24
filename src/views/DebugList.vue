<template>
  <div id="app">
    <router-link :to="v.path" v-for="(v, i) in routes.filter((v, i) => i > 0)" :key="i" tag="div" class="item">
      {{v.name}}
    </router-link>
  </div>
</template>

<script>
import { routes } from '../router/index'
export default {
  data () {
    return {
      routes: routes
    }
  }
}
</script>

<style lang="scss">
.item {
  margin: 2rem;
  text-align: left;
}
</style>
