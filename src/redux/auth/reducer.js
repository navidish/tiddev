import { SET_TOKEN, REMOVE_TOKEN } from './type';
const initialData = {
  accessToken: '',
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
