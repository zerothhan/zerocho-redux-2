const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require("./reducers");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
};

// compose : 합성하는 함수
// compose 없이도 동작함
// compose를 하는 이유 : applyMiddleware 말고 redux devtool 같은 것들도 추가적으로 붙일 때 compose로 함수를 합성한다.
const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("로깅", action);
  dispatch(action);
};

const thunkMiddleware = (store) => (dispatch) => (action) => {
  // 비동기
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return dispatch(action); // 동기
};

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(reducer, initialState, enhancer);

console.log("1st", store.getState());

// 위에는 미리 만들어야 함
// ----------------------------------------------------------------
// 밑에는 화면에서의 동작이므로 개발 과정에 만들어야 함

store.dispatch(
  logIn({
    id: 1,
    name: "zerocho",
    admin: true,
  })
);
console.log("2nd", store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: "안녕하세요. 리덕스",
//   })
// );
// console.log("3rd", store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 2,
//     content: "두번째 리덕스",
//   })
// );
// console.log("4th", store.getState());

// store.dispatch(logOut());

// console.log("5th", store.getState());
