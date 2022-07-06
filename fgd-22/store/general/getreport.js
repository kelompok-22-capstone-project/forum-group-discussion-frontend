//state
export const state = () => ({
    reports:[],
    totalReport:0,
  });
  
  //mutations
  export const mutations = {
    //mutation "SET_CATEGORY_DATA"
    SET_REPORT_DATA(state, payload) {
      //set value state "category"
      state.reports = payload;
    },
    COUNT_REPORT_DATA(state, payload){
      state.totalReport = payload;
    },
  };
  
  //actions
  export const actions = {
  
    //get categories data
    async getReportData({ commit }) {
      //set promise
      await new Promise((resolve, reject) => {
        //fetching Rest API "/categories" with method "GET"
        this.$axios
          .get("/reports", {
            headers: {
              "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
              "Content-Type": "application/json",
            },
          })
          //success
          .then((response) => {
            //commit ti mutation "SET_CATEGORIES_DATA"
            commit("SET_REPORT_DATA", response.data.data.list);
            commit("COUNT_REPORT_DATA", response.data.data.list.length);
            console.log("get report success", response.data.data.list.length);
  
            //resolve promise
            resolve();
          });
      });
    },
  
  };
  