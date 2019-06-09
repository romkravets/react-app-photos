import { UnsplashActionTypes, UnsplashFetchAction } from '../actions';

const INITIAL_STATE = {
  text: 'TEST'
};

const unsplash = (state: any = INITIAL_STATE, action: UnsplashFetchAction) => {
  switch(action.type) {
    case UnsplashActionTypes.FETCH:
      return { ...state, text: action.payload };
    default:
      return state;
  }
}

export { unsplash }