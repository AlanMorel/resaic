import { createStore } from "vuex";

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

const store = createStore({
    state,
    getters,
    mutations,
    actions
});

export default store
