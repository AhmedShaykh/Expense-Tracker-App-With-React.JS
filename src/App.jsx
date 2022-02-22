import React from 'react';
import Heading from './Components/Heading';
import Balance from './Components/Balance';
import DataAccount from './Components/DataAccount';
import TransactionHistory from './Components/TransactionHistory';
import Transaction from './Components/Transaction';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Heading />
      <div className="container">
        <Balance />
        <DataAccount />
        <TransactionHistory />
        <Transaction />
      </div>
    </div>
  );
}

export default App;