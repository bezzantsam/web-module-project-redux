const initialState = {
  favorites: [{ title: "Movie", id: 1 }],
  displayFavorites: true,
};
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITES": {
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    }
    case "ADD_FAVORITE": {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case "REMOVE_FAVORITE": {
      return {
        ...state,
        favorites: [
          ...state.filter((item) => items.id !== item.id),
          action.payload,
        ],
      };
    }
    default:
      return state;
  }
};
export default reducer;
