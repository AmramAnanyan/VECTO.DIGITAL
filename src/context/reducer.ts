import { ActionType, AppState, Featured } from './types';
import data from 'data.json';

export const defaultState = data;

export const reducer = (state: AppState, action: ActionType) => {
  switch (action.type) {
    case Featured.SELECT: {
      return { ...state, Featured: action.payload };
    }
    default:
      return state;
  }
};
