const { createStore } = require("redux");
const reducer = require("./reducers");
const { logIn, logOut, addPost } = require("./actions/action");

/*
const initialState = {
  user: null,
  isLoggingIn: true,
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};
*/

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },  
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

const store = createStore(reducer, initialState);
// react-redux 안에 들어있음. 실제 react-redux 쓸 일은 거의 없음. 에러 디버깅할 때만 씀
store.subscribe(() => {
  // 화면 바꿔주는 코드
  console.log("changed");
});

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

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요. 리덕스",
  })
);
console.log("3rd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "두번째 리덕스",
  })
);
console.log("4th", store.getState());

store.dispatch(logOut());

console.log("5th", store.getState());
