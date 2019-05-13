import axios from 'axios';

const initialState = {
  candy: []
};

const GET_CANDY = 'GET_CANDY';

const getCandyActionCreator = candy => {
  return { type: GET_CANDY, candy };
};

export const getCandy = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/candy');
    dispatch(getCandyActionCreator(data));
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDY:
      return { ...state, candy: [...action.candy] };
    default:
      return state;
  }
};

export default rootReducer;
