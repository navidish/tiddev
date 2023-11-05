import { SET_TOKEN, REMOVE_TOKEN } from './type';

export const setToken = (value) => {
  return {
    type: SET_TOKEN,
    payload: value,
  };
};

export const removeToken = (value) => {
  console.log('value', value);
  return {
    type: REMOVE_TOKEN,
    payload: value,
  };
};
