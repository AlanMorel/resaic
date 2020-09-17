import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let state = {

}

let getters = {

}

let mutations = {
    UPDATE_USER: (state, payload) => {
        console.log(state);
        console.log(payload);
        state.user = payload;
    }
}

let actions = {
    updateUser: (context, payload) => {
        context.commit("UPDATE_USER", payload);
    }
}

state = Object.assign({}, state, data)

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store
