//state
export const state = () => ({
  category: [],
  totalCategory: [],
  categoryName:[],
});

//mutations
export const mutations = {
  //mutation "SET_CATEGORY_DATA"
  SET_CATEGORY_DATA(state, payload) {
    //set value state "category"
    state.category = payload;
  },
  COUNT_CATEGORY_DATA(state, payload) {
    state.totalCategory = payload;
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
        .then((response) => {
          commit("SET_CATEGORY_DATA", response.data.data.categories);
          commit("COUNT_CATEGORY_DATA", response.data.data.categories.length);
          console.log("get categories success", response.data.data.categories.length, response.data.data.categories);

          //resolve promise
          resolve();
        });
    });
  },
};
