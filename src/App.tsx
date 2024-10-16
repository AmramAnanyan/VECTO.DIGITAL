import { createContext } from 'react';
import './App.css';
import data from './data.json';
import HomePage from './pages/homePage';
import ContextProvider from 'context/ContextProvider';

const App = () => {
  return (
    <>
      <ContextProvider>
        <HomePage />
      </ContextProvider>
    </>
  );
};

export default App;
