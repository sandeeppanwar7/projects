//import pekka from '../app/assets/pekka.jpg';
//import arvidsson from '../app/assets/arvidsson.jpg';
import fetch from '../utils/fetch';
export const SET_CURRENT_PROFILE = 'auth/SET_CURRENT_PROFILE';

const initialState = {
  currentProfile: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: action.profile
      };

    default:
      return state;
  }
};

export const getCurrentProfile = id => dispatch =>
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((profile)=>{
    dispatch({
      type: SET_CURRENT_PROFILE,
      profile
    });
  })

export const removeCurrentProfile = () => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: SET_CURRENT_PROFILE,
      profile: {}
    });

    resolve({});
  });
