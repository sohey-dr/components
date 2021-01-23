export const state = () => ({
  num: 0
})

export const mutations = {
  addNumber: function(state) {
    state.num += 1
  },
  resetNumber: function(state) {
    state.num = 0
  }
}

export const actions = {
  addNumberAction(context) {
    context.commit('addNumber')
  },
  resetNumberAction(context) {
    context.commit('resetNumber')
  },
}