const { combineReducers } = require("redux");

// 새로운 state 생성
const userReducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    default:
      return prevState;
  }
};

const postReducer = (prevState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

module.exports = combineReducers({
  user: userReducer,
  posts: postReducer,
});
