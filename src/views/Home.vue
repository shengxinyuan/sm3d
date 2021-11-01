<template>
  <div class="home">
    <title-bar title="3D设计" :type="2"/>
    <a href="/design.html"><div class="home-banner"></div></a>
    <!-- <div class="home-text"></div> -->
    <a href="/design.html"><div class="home-tag"></div></a>
    <a href="/design.html"><div class="home-design"></div></a>
    <router-link to="/mydesign" tag="a"><div class="home-design">我的设计</div></router-link>
    <!-- <router-link to="/mydesign">
      <div class="home-mydesign"></div>
    </a> -->
    <a href="/design.html"><div class="home-se"></div></a>
    <a href="/design.html"><div class="home-img"></div></a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  created () {
    if (this.$route.query.hasOwnProperty('token')) {
      localStorage.setItem('token',this.$route.query.token);
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.home {
  overflow-y: auto;
  max-height: 100vh;
  .home-banner {
    background-image: url("https://imgcdn.zbird.com/storage/uploads/images/2021_01_27/Q3EIUIX6sA8842U9hnWJJWESRL9cSUfSLCf5CR3U.jpeg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vw;
  }
  .home-text {
    background-image: url("https://imgcdn.zbird.com/storage/uploads/images/2021_01_24/HOg7MurhDfOf5ux6yXyIiI1tA71hoA1h0IbT6iZW.jpeg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 14.5vw;
  }
  .home-tag {
    background-image: url("https://imgcdn.zbird.com/storage/uploads/images/2021_01_24/HmeWgmB87x1bZcBd8WxY69HhTusL7TBlxQlPauEh.jpeg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 15.5vw;
  }
  .home-design {
    background-image: url("https://imgcdn.zbird.com/storage/uploads/images/2021_01_24/3FHglq6qUqIlfLKF95ZedwP6WoEuyLXQomIgvFGf.jpeg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 26vw;
    line-height: 26vw;
  }
  .home-mydesign {
    background-image: url("https://imgcdn.zbird.com/storage/uploads/images/2021_01_24/WEEipXbENhpRqr2eZBOi4bvr8d3yXaTXtyJLTTuQ.jpeg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 26vw;
  }
  .home-se {
    background-image: url("https://imgcdn.zbird.com/storage/uploads/images/2021_01_24/ZzceWXmABJMMMlnFX5uwxh8al8ynTLSYCEQykdhx.jpeg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 14vw;
  }
  .home-img {
    background-image: url("https://imgcdn.zbird.com/storage/uploads/images/2021_08_09/Fah6VrFMSxh7ZgCCY8gUbRHBDO2sBy0RjfV2amHU.jpeg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 97vw;
  }
}
</style>
