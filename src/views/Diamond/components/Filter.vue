<template>
  <div class="diamond-filter" @scroll.stop>
    
    <van-nav-bar
      title="条件筛选"
      left-text=""
      left-arrow
      @click-left="goback"
      :safe-area-inset-top="true"
      class="bag-bar"
    />

    <div class="filter-cont">
      <section class="filter-item">
      <div class="filter-item-label">钻石大小（克拉）</div>
      <div class="filter-item-value flex" @click="showPicker = true">
        <div class="picker-value">
          <div class="value">{{minsize}}</div>
          <van-icon name="arrow-down" />
          <div class="unit">ct</div>
        </div>
        <div>—</div>
        <div class="picker-value">
          <div class="value">{{maxsize}}</div>
          <van-icon name="arrow-down" />
          <div class="unit">ct</div>
        </div>
      </div>
    </section>

    <section class="filter-item" v-for="(v, i) in list" :key="i">
      <div class="filter-item-label">{{v.title}}</div>
      <div class="filter-item-value warp">
        <span :class="v.value === item.value ? 'active' : ''" v-for="(item, index) in v.value_list" :key="index" @click="selectItem(v.name, item.value)">
          <div :class="v.name === 'shape' ? 'shape': '' ">
            {{item.title}}
          </div>
        </span>
      </div>
    </section>
    </div>

    <div class="btns-box">
      <a class="btn-reset" @click="reset">重置</a>
      <a class="btn" @click="selected">确认筛选</a>
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


export default {
  components: {
  },
  props: ['option_list', 'size'],
  data() {
    return {
      list: [],
      showPicker: false,
      minsize: 0,
      maxsize: 0,
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
          values: diamondSize.filter(v => +v > this.minsize),
          defaultIndex: 7,
        },
      ]
    }
  },
  created() {
    this.list = this.option_list
    this.minsize = this.size.minsize
    this.maxsize = this.size.maxsize
  },
  methods: {
    reset() {
      for (let v in this.size) {
        this[v] = this.size[v]
      }

      this.list = this.list.map((item) => ({
        ...item,
        value: ''
      }))
    },
    goback() {
      this.$emit('close')
    },
    selected() {
      this.$emit('selected', this.list, {minsize: this.minsize, maxsize:this.maxsize})
    },
    onChange(_, val) {
      const [minsize, maxsize] = val
      this.minsize = minsize
      this.maxsize = maxsize
    },
    onConfirm(val) {
      const [minsize, maxsize] = val
      this.minsize = minsize
      this.maxsize = maxsize
      this.showPicker = false
    },
    selectItem(name, value) {
      this.list.forEach(val => {
        if (val.name === name) {
          val.value = value
        }
      });
      this.list = [...this.list]
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
  padding-bottom: 80px;
  text-align: left;
  box-sizing: border-box;
  .filter-cont {
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 50px 16px 0 16px;
    box-sizing: border-box;
  }
  .filter-item-label {
    font-size: 15px;
    padding: 0 6px;
  }
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
    .warp {
      flex-wrap: wrap;
    }
    .filter-item-value {
      display: flex;
      align-items: center;
      margin-top: 10px;
      & > span {
        display: block;
        text-align: center;
        height: 32px;
        line-height: 32px;
        min-width: 32px;
        border-radius: 16px;
        background-color: #48484f;
        font-weight: normal;
        color: #c1b18a;
        margin: 6px 6px 0;
        font-size: 12px;
      }
      .shape {
        width: 56px;
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

/deep/.bag-bar {
    position: fixed;
    width: 100%;
    .van-icon {
      color: #000 !important;
    }
    .van-nav-bar__content {
      height: 50px;
    }
    .van-nav-bar__title {
      line-height: 50px;
      font-size: 16px;
      font-weight: 700 !important;
      color: #000;
    }
    .van-nav-bar__arrow {
      font-size: 24px;
    }
    .van-nav-bar__left, .van-nav-bar__right {
      padding: 8px;
    }
  }
</style>
