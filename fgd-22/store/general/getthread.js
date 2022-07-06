//state
export const state = () => ({
    threads:[],
    totalThread:[],
  });
  
  //mutations
  export const mutations = {
    //mutation "SET_CATEGORY_DATA"
    SET_THREAD_DATA(state, payload) {
      state.threads = payload;
    },
    COUNT_THREAD_DATA(state,payload){
      state.totalThread = payload;
  },
}
  //actions
  export const actions = {
  
    //get categories data
    async getThreadData({ commit }) {
      //set promise
      await new Promise((resolve, reject) => {
        //fetching Rest API "/categories" with method "GET"
        this.$axios
          .get("/threads", {
            headers: {
              "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
              "Content-Type": "application/json",
            },
          })
          //success
          .then((response) => {
            //commit ti mutation "SET_CATEGORIES_DATA"
            commit("SET_THREAD_DATA", response.data.data.list);
            commit("COUNT_THREAD_DATA", response.data.data.list.length);
            console.log("get thread success", response.data.data.length, response.data.data.list);
  
            //resolve promise
            resolve();
          });
      });
    },
  
  };
  