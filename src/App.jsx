import React from 'react';
import './App.css';
import AccountDetails from './Components/AccountDetails';
import Balance from './Components/Balance.jsx';
import Header from './Components/Header.jsx';

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <AccountDetails />
    </div>
  );
}

export default App;