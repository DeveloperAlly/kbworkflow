// export const removeItem = index => dispatch => {
//   dispatch({
//     type: "REMOVE_LIST_ITEM",
//     payload: index
//   });
// };
// export const selectItem = index => dispatch => {
//   dispatch({
//     type: "SELECT_ITEM",
//     payload: index
//   })
// };
// export const addItem = text => dispatch => {
//   const newItem = {
//     label: text
//   }
//   dispatch({
//     type: "ADD_LIST_ITEM",
//     payload: newItem
//   })
// };

//MY GRAPH ACTIONS
// export const getGraphState = listItem => dispatch => {
//
// };

const initialState = {
  listItems: [
    { label: "Reset password" },
    { label: "Migrate emails for clients" },
    { label: "Deliver new password after reset" },
    { label: "Permission for folders" }
  ],
  selectedListIndex: 0,
  graphState: {
    listItem: "Reset password"
  }
};

const GraphReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_LIST_ITEM":
      return {
        ...state,
        listItems: state.listItems.filter((item, index) => index !== action.payload)
      };
    case "ADD_LIST_ITEM":
      return {
        ...state,
        listItems: [...state.listItems, action.payload]
      };
    case "SELECT_ITEM":
      return {
        ...state,
        selectedListIndex: action.payload
      };
    default:
      return state;
  }
};

export default GraphReducer;
