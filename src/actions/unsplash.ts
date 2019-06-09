import { IAction } from '../types/action';

export enum UnsplashActionTypes {
  FETCH
}

export type UnsplashFetchAction = IAction<UnsplashActionTypes, string>;

// Action creator
export const fetchItems: (payload?: string) => UnsplashFetchAction = (payload?: string) => {
  return {
    type: UnsplashActionTypes.FETCH,
    payload: payload || 'hello world'
  };
}