export const initialState = {
  products: [
    {
      id: Math.random(),
      name: "Laptop",
      price: 50000,
      desc: "Lorem ipsum dolor sit amet.",
      img: "1.jpg",
    },
    {
      id: Math.random(),
      name: "Watch",
      price: 1000,
      desc: "Lorem ipsum dolor sit amet.",
      img: "2.jpg",
    },
    {
      id: Math.random(),
      name: "Mobile",
      price: 50000,
      desc: "Lorem ipsum dolor sit amet.",
      img: "3.jpg",
    },
  ],
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return { ...state, term: action.term };
    default:
      return state;
  }
};

export default reducer;
