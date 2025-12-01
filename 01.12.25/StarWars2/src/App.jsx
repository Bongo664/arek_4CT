import React from 'react';
import Informacja from './components/Informacja';
import './App.css';

export const NazwaMotywu = React.createContext();

function App() {
  return (
    <>
      <NazwaMotywu.Provider value={{ stronamocy: "ciemna" }}>
        <Informacja />
      </NazwaMotywu.Provider>
    </>
  )
}

export default App
