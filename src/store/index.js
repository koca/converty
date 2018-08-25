import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

// hot reload vuex
if (module.hot) {
  module.hot.accept(["./getters", "./actions", "./mutations"], () => {
    store.hotUpdate({
      getters: require("./getters"),
      actions: require("./actions"),
      mutations: require("./mutations")
    });
  });
}

export default store;
