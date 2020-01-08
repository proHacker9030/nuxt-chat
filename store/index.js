export const state = () => ({
  user: {},
  messages: [],
  users: []
});

export const actions = {};

export const getters = {
  getUser(state) {
    return state.user;
  },
  getUsers(state) {
    return state.users;
  },
  getMessages(state) {
    return state.messages;
  }
};

export const mutations = {
  setUser(state, data) {
    state.user = data;
  },
  clearData(state) {
    state.user = {};
    state.messages = [];
    state.users = [];
  },
  SOCKET_newMessage(state, message) {
    state.messages.push(message);
  },
  SOCKET_updateUsers(state, users) {
    state.users = users;
  }
};
