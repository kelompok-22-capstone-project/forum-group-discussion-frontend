//state
export const state = () => ({
  users: [],
  totalUser: [],
  myUsername: [],
  myEmail: [],
  myID: [],
  myThreads:[],
});

//mutations
export const mutations = {
  SET_USER_DATA(state, payload) {
    state.users = payload;
  },
  COUNT_USER_DATA(state, payload) {
    state.totalUser = payload;
  },
  SET_MY_DATA_NAME(state, payload) {
    state.myUsername = payload;
  },
  SET_MY_DATA_EMAIL(state, payload) {
    state.myEmail = payload;
  },
  SET_MY_DATA_TOTALTHREAD(state, payload) {
    state.myThreads = payload;
  },
  SET_MY_DATA_ID(state, payload) {
    state.myID = payload;
  },
};

//actions
export const actions = {
  async getUserData({ commit }) {
    //set promise
    await new Promise((resolve, reject) => {
      this.$axios
        .get("/users", {
          headers: {
            "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
            "Content-Type": "application/json",
          },
        })
        
        //success
        .then((response) => {
          commit("SET_USER_DATA", response.data.data.list);
          commit("COUNT_USER_DATA", response.data.data.list.length);
          console.log(
            "get user success",
            response.data.data.list.length,
            response.data.data.list
          );

          //resolve promise
          resolve();
        });
    });
  },
  async getMyData({ commit }) {
    //set promise
    await new Promise((resolve, reject) => {
      this.$axios
        .get("/users/me", {
          headers: {
            "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
            "Content-Type": "application/json",
          },
        })
        //success
        .then((response) => {
          commit("SET_MY_DATA_NAME", response.data.data.username);
          commit("SET_MY_DATA_EMAIL", response.data.data.email);
          commit("SET_MY_DATA_ID", response.data.data.userID);
          commit("SET_MY_DATA_TOTALTHREAD", response.data.data.totalThread);
          console.log("get my data success", response.data.data);

          //resolve promise
          resolve();
        });
    });
  },
};
