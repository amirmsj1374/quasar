import state from "./state";
// import * as getters from './getters'
// import * as mutations from "./mutations";
// import * as actions from "./actions";

const getters = {
  tasks: state => {
    return state.tasks;
  }
};
const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  }
};
const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  }
};
export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
};
