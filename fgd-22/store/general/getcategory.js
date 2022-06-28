//state
export const state = () => ({
  category:[],
});

//mutations
export const mutations = {
  //mutation "SET_CATEGORY_DATA"
  SET_CATEGORY_DATA(state, payload) {
    //set value state "category"
    state.category = payload;
  },
};

//actions
export const actions = {

  //get categories data
  async getCategoriesData({ commit }) {
    //set promise
    await new Promise((resolve, reject) => {
      //fetching Rest API "/categories" with method "GET"
      this.$axios
        .get("/categories", {
          headers: {
            "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
            "Content-Type": "application/json",
          },
        })
        //success
        .then((response) => {
          //commit ti mutation "SET_CATEGORIES_DATA"
          commit("SET_CATEGORY_DATA", response.data.data.categories);
          console.log(response.data.data.categories);

          //resolve promise
          resolve();
        });
    });
  },

};
