import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import AccountDetails from './Components/AccountDetails';
import History from './Components/History';
import TransactionList from './Components/TransactionList';

function App() {
  return (
    <div className='container'>
    <Header />
    <Balance />
    <AccountDetails />
    <History />
    <TransactionList />
    </div>
  );
}

export default App;