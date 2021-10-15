<template>
  <div class="loading-cont">
    <div class="loadEffect">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="tips">没有一枚钻戒，比亲手设计更有价值和意义。</div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.loading-cont {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgb(37, 37, 42);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 999;
  .tips {
    margin-top: 16px;
    font-size: 12px;
  }
}
.loadEffect {
  width: 100px;
  height: 100px;
  position: relative;
  margin-bottom: 16px;
  transform: scale(50%, 50%);
}
.loadEffect span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(193, 177, 138);
  position: absolute;
  animation: load 1.04s ease infinite;
}
@keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
.loadEffect span:nth-child(1) {
  left: 0;
  top: 50%;
  margin-top: -4px;
  animation-delay: 0.13s;
}
.loadEffect span:nth-child(2) {
  left: 16px;
  top: 16px;
  animation-delay: 0.26s;
}
.loadEffect span:nth-child(3) {
  left: 50%;
  top: 0;
  margin-left: -4px;
  animation-delay: 0.39s;
}
.loadEffect span:nth-child(4) {
  top: 16px;
  right: 16px;
  animation-delay: 0.52s;
}
.loadEffect span:nth-child(5) {
  right: 0;
  top: 50%;
  margin-top: -4px;
  animation-delay: 0.65s;
}
.loadEffect span:nth-child(6) {
  right: 16px;
  bottom: 16px;
  animation-delay: 0.78s;
}
.loadEffect span:nth-child(7) {
  bottom: 0;
  left: 50%;
  margin-left: -4px;
  animation-delay: 0.91s;
}
.loadEffect span:nth-child(8) {
  bottom: 16px;
  left: 16px;
  animation-delay: 1.04s;
}
</style>
