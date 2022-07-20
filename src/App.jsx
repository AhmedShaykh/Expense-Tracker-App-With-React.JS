import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import AccountDetails from './Components/AccountDetails';
import History from './Components/History';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { TransactionsProvider } from './Hooks/TransContext';

function App() {
  return (
    <div className='container'>
        <Header />
        <TransactionsProvider>
          <Balance />
          <AccountDetails />
          <History />
          <TransactionList />
          <AddTransaction />
        </TransactionsProvider>
    </div>
  );
}

export default App;