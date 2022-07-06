//state
export const state = () => ({
    users:[],
    totalUser:[],
    myData:[],
  });
  
  //mutations
  export const mutations = {
    SET_USER_DATA(state, payload) {
      state.users = payload;
    },
    COUNT_USER_DATA(state,payload){
      state.totalUser = payload;
    },
    SET_MY_DATA(state, payload) {
      state.myData = payload;
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
            commit("COUNT_USER_DATA", response.data.data.list.length)
            console.log("get user success",response.data.data.list.length, response.data.data.list);
  
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
            commit("SET_MY_DATA", response.data.data);
            console.log("get user success",response.data.data);
  
            //resolve promise
            resolve();
          });
      });
    },
    
  
  };
  