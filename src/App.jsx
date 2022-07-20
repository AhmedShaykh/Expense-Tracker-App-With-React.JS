import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import AccountDetails from './Components/AccountDetails';
import History from './Components/History';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
// import { TransactionsContext } from './Context/TransContext';

function App() {
  return (
    <div className='container'>
      {/* <TransactionsContext.Provider> */}
        <Header />
        <Balance />
        <AccountDetails />
        <History />
        <TransactionList />
        <AddTransaction />
    {/* </TransactionsContext.Provider> */}
    </div>
  );
}

export default App;