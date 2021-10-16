export default {
  state: {
    currtAddress: {
      id: 0,
      name: '',
      tel: '',
      address: ''
    }
  },
  mutations: {
    setState (state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {

  },
  modules: {

  }
}
