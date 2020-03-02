const actions = {
    updateUserInfo({ commit }, payload) {
      commit('UPDATE_USER_INFO', payload)
    },
    async userLogin({commit},data){
        try {
            const res = await $axios.post('/user-login', data);
            if (!res.data.message) {
                commit('USER_LOGIN', res.data);
            }
            return res.data
        } catch (e) {
            return false
        }
    },
    async updateUserData({ commit }, data) {
        commit('UPDATE_USER_LOGIN', data);
    },
};

export default actions
