//initial state for booleans used for hiding and displaying html elements
export const initialState = [
  {
    boolean1: false,
  },
  {
    boolean2: false,
  },
  {
    boolean3: false,
  },
];
//reducer for hiding and displaying html elements
export const reducer = (state, action) => {
  switch (action.type) {
    case "display1":
      return { boolean1: (state.boolean1 = action.payload) };
    case "display2":
      return { boolean2: !state.boolean2 };
    case "display3":
      return { boolean3: (state.boolean3 = action.payload) };
  }
};
