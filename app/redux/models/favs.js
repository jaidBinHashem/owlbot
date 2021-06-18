export default {
  state: {
    favs: [],
  },
  reducers: {
    saveFav: (state, payload) => {
      let fav = [payload]
      return {
        ...state,
        favs: [...state.favs, ...fav],
      };
    },
  },
  effects: dispatch => ({}),
};
