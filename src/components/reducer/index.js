import { ADD_TODO } from "../../constant/action-types";

const initState = {
  todo: [
    { id: 1, title: "Hello add me" },
    { id: 2, title: "Hello add me second time" },
    { id: 3, title: "Hello add me thrid time" },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === ADD_TODO) {
    return Object.assign({}, state, {
      todo: state.todo.concat(action.payload),
    });
  }
  return state;
};

export default rootReducer;
