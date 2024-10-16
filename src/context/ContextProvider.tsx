import { createContext, ReactNode, Reducer, useReducer, useState } from 'react';
import { defaultState, reducer } from './reducer';
import { ActionType, AppState } from './types';
import sortByPopupularity from 'helpers/sortByPopupularity';
import getChoosenFromStorage from 'helpers/getChoosenFromStorage';
export const AppContext = createContext(defaultState);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<AppState, ActionType>>(
    reducer,
    defaultState
  );

  return (
    //@ts-ignore
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
