export const state = () => ({
  user: false
});

export const actions = {
  SOCKET_newMessage(ctx, data) {
    console.log("Message from store", data);
  }
};

export const getters = {
  getUser(state) {
    return state.user;
  }
};

export const mutations = {
  setUser(state, data) {
    state.user = data;
  }
};
