const mutations = {
  USER_LOGIN(state, payload) {
    state.AppActiveUser.uid         = payload.user.id;
    state.AppActiveUser.displayName = payload.user.name; // From Auth
    state.AppActiveUser.about       = "I love this app.";
    state.AppActiveUser.photoURL    = payload.user.profile; // From Auth
    state.AppActiveUser.status      = "online";
    state.AppActiveUser.userRole    = payload.user.role;
    localStorage.setItem("userInfo", JSON.stringify({user_info:state.AppActiveUser,access_token:payload.access_token}))
  },
  UPDATE_USER_LOGIN(state, payload) {
    state.AppActiveUser = payload.user_info
  }
};

export default mutations

