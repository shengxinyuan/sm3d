<template>
  <div class="diamond-select-list">
    <div class="sort" v-for="(v, i) in list" :key="i" @click="changeStatus(v.value)">
      <div :class="v.value === on ? 'active' : '' ">{{v.name}}</div>
      <div class="sort-box">
        <div class="sort-box-asc" :class=" v.status === 'desc' ? 'icon-act' : '' "></div>
        <div class="sort-box-desc" :class=" v.status === 'asc' ? 'icon-act' : '' "></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: ['list'],
  data() {
    return {
      on: '',
    };
  },
  methods: {
    changeStatus(value) {
      this.on = value;
      const list = []
      this.list.forEach((item) => {
        let status = ''
        if (item.value === value) {
          status = item.status === '' ? 'asc' : item.status === 'asc' ? 'desc' : 'asc'
          
        } else {
          status = ''
        }
        list.push({
          name: item.name,
          value: item.value,
          status,
        })
      })
      this.$emit('changeList', list, value)
    }
  },
};
</script>

<style lang="scss" scoped>
.diamond-select-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 15px;
  }
.sort {
  display: flex;
  align-items: center;
  font-size: 12px;
  .active {
    color: #c1b18a;
  }
}
.sort-box {
  .icon-act {
    opacity: .5;
  }
  .sort-box-asc {
    width: 30px;
    height: 12px;
    background: url('https://img.alicdn.com/imgextra/i1/O1CN01O6Mpn51J9AqkPv7nN_!!6000000000985-2-tps-200-200.png') center center no-repeat;
    background-size: 8px 8px;
  }
  .sort-box-desc {
    width: 30px;
    height: 12px;
    background: url('https://img.alicdn.com/imgextra/i1/O1CN01O6Mpn51J9AqkPv7nN_!!6000000000985-2-tps-200-200.png') center center no-repeat;
    background-size: 8px 8px;
    transform: rotate(180deg);
  }
}

</style>
