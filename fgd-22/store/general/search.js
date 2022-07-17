export const state = () => ({
  searchThread: null,
//   newSearchThread: null,
});

export const mutations = {
  threads(state, payload) {
    // if (state.searchThread === null) {
        state.searchThread = payload;
    // } else {
    //     state.newSearchThread = payload;
    // }
  },
};
