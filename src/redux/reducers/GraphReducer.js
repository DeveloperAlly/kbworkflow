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

// MY GRAPH ACTIONS
export const getGraphNodes = listItem => dispatch => {

};

export const addGraphNode = node => dispatch => {

};


const initialState = {
  graphNodes: {
    nodes: [{}]
  }
};

const GraphReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_GRAPHNODES":
      return {
        ...state
      };
    case "SET_GRAPH_NODES":
      return {
        ...state,
        listItems: [...state.listItems, action.payload]
      };
    case "ADD_GRAPH_NODE":
      return {
        ...state,
        selectedListIndex: action.payload
      };
    default:
      return state;
  }
};

export default GraphReducer;
