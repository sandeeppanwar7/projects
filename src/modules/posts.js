import fetch from '../utils/fetch';
export const LOAD_POSTS = 'posts/LOAD_POSTS';
export const  LOAD_SINGLE_POSTS = 'posts/LOAD_SINGLE_POSTS';

const initialState = {
  posts: [],
  post:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case LOAD_SINGLE_POSTS:
      return {
        ...state,
        post:action.post
      }
    default:
      return state;
  }
};

export const getPosts = () => dispatch =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((posts)=>{
    dispatch({
      type: LOAD_POSTS,
      posts
    });
  })



export const getPostDetail = (id) => dispatch =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((post)=>{
    dispatch({
      type: LOAD_SINGLE_POSTS,
      post
    });
  })