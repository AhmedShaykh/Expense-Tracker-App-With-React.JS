import React from 'react';
import Heading from './Components/Heading';
import Balance from './Components/Balance';
import DataAccount from './Components/DataAccount';
import TransactionHistory from './Components/TransactionHistory';
import Transaction from './Components/Transaction';
import { GlobalProvider } from './Context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Heading />
      <div className="container">
        <Balance />
        <DataAccount />
        <TransactionHistory />
        <Transaction />
      </div>
    </GlobalProvider>
  );
}

export default App;