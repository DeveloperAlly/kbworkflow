export const removeItem = index => dispatch => {
  dispatch({
    type: "REMOVE_LIST_ITEM",
    payload: index
  });
};
export const selectItem = index => dispatch => {
  dispatch({
    type: "SELECT_ITEM",
    payload: index
  });
};
export const addItem = text => dispatch => {
  const newItem = {
    label: text
  };
  dispatch({
    type: "ADD_LIST_ITEM",
    payload: newItem
  });
};

const initialState = {
  listItems: [
    { label: "Reset password" },
    { label: "Migrate emails for clients" },
    { label: "Deliver new password after reset" },
    { label: "Permission for folders" }
  ],
  selectedListIndex: 0
};

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_LIST_ITEM":
      let newIndex = state.selectedListIndex;
      if (
        state.selectedListIndex === state.listItems.length - 1 &&
        state.selectedListIndex !== 0
      ) {
        newIndex = state.selectedListIndex - 1;
      }
      return {
        ...state,
        selectedListIndex: newIndex,
        listItems: state.listItems.filter(
          (item, index) => index !== action.payload
        )
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

export default ListReducer;
