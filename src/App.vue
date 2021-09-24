<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

</script>

<style lang="scss">
@font-face {
    font-family: zbird-iconfont;//自定义字体名称
    src: url('/src/assets/zbird-iconfont.ttf')
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
[class*=" iconfont-"],
[class^="iconfont-"] {
  speak: none;
  font-family: zbird-iconfont !important;
  speak: never;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.design-img {
  width: 250px;
  height: 320px;
  background-repeat: no-repeat;
  margin: 0 auto;
  background-size: 100%;
  background-position: center;
}
</style>
