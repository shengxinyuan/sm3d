<template>
  <div class="diamond-filter">

    <section class="filter-item">
      <div class="filter-item-label" @click="goback">钻石大小（克拉）</div>
      <div class="filter-item-value flex" @click="showPicker = true">
        <div class="picker-value">
          <div class="value">{{num1}}</div>
          <van-icon name="arrow-down" />
          <div class="unit">ct</div>
        </div>
        <div>—</div>
        <div class="picker-value">
          <div class="value">{{num2}}</div>
          <van-icon name="arrow-down" />
          <div class="unit">ct</div>
        </div>
      </div>
      
    </section>

    <section class="filter-item">
      <div class="filter-item-label" @click="goback">颜色选择</div>
      <div class="filter-item-value">
        <span class="active">1</span>
        <span>2</span>
        <span>2</span>
      </div>
    </section>

    <section class="filter-item">
      <div class="filter-item-label" @click="goback">颜色选择</div>
      <div class="filter-item-value">
        <span>1</span>
        <span>2</span>
        <span>2</span>
        <span>1</span>
        <span>2</span>
        <span>2</span>
        <span>1</span>
        <span>2</span>
      </div>
    </section>

    <section class="filter-item">
      <div class="filter-item-label" @click="goback">颜色选择</div>
      <div class="filter-item-value">
        <span>1</span>
        <span>2</span>
        <span>2</span>
        <span>1</span>
        <span>2</span>
        <span>2</span>
        <span>1</span>
        <span>2</span>
      </div>
    </section>

    <section class="filter-item">
      <div class="filter-item-label" @click="goback">颜色选择</div>
      <div class="filter-item-value">
        <span>1</span>
        <span>2</span>
        <span>2</span>
      </div>
    </section>

    <section class="filter-item">
      <div class="filter-item-label" @click="goback">颜色选择</div>
      <div class="filter-item-value">
        <span>1</span>
        <span>2</span>
        <span>2</span>
      </div>
    </section>

    <div class="btns-box">
      <a class="btn-reset" @click="reset">重置</a>
      <a class="btn" @click="goback">确认筛选</a>
    </div>

    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
        @change="onChange"
      />
    </van-popup>
  </div>
</template>

<script>
const diamondSize = []
for (let i = 0.3; i < 20.1; i= i + .1) {
  diamondSize.push(i.toFixed(1))
} 
const defaultVal = {
  num1: '0.3',
  num2: '1.0',
}

export default {
  components: {
  },
  props: [],
  data() {
    return {
      showPicker: false,
      num1: defaultVal.num1,
      num2: defaultVal.num2,
    };
  },
  computed: {
    columns() {
      return [
        {
          values: diamondSize,
          defaultIndex: 0,
        },
        {
          values: diamondSize.filter(v => +v > this.num1),
          defaultIndex: 7,
        },
      ]
    }
  },
  created() {

  },
  mounted() {
  },
  methods: {
    reset() {
      for (let v in defaultVal) {
        this[v] = defaultVal[v]
      }
    },
    goback() {
      this.$emit('close')
    },
    onChange(_, val) {
      const [num1, num2] = val
      this.num1 = num1
      this.num2 = num2
    },
    onConfirm(val) {
      const [num1, num2] = val
      this.num1 = num1
      this.num2 = num2
      this.showPicker = false
    }
  },
};
</script>

<style lang="scss" scoped>
.diamond-filter {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgb(60, 60, 68);
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 15px 22px;
  text-align: left;
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .filter-item {
    margin-top: 10px;
    .picker-value {
      display: flex;
      align-items: center;
      width: 140px;
      height: 30px;
      border-radius: 15px;
      background-color: #48484f;
      color: #c1b18a;
      margin: 0 15px;
      .value {
        flex: 1;
        text-align: center;
      }
      .unit {
        margin: 0 12px 0 16px;
      }
    }
    .filter-item-value {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      
      & > span {
        display: block;
        flex: 1;
        text-align: center;
        height: 32px;
        line-height: 32px;
        min-width: 32px;
        border-radius: 16px;
        background-color: #48484f;
        color: #c1b18a;
        margin: 0 10px;
        font-weight: bold;
      }
      & > .active {
        background-color: #c1b18a;
        color: #48484f;
      }
    }
  }

  .btns-box {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgb(72, 72, 79);
    align-items: center;
    font-size: 14px;
    .btn-reset {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      border-radius: 18px;
      background-color: rgb(84, 84, 91);
      width: 25%;
      color: rgb(157, 157, 157);
      margin-left: 15px;
    }
    .btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      border-radius: 18px;
      margin: 0 15px;
      background-color: rgb(193, 177, 138);
      color: rgb(60, 60, 68);
    }
  }
}
.van-picker__toolbar  {
  & > button {
    font-size: 24px !important;
  }
}
</style>
