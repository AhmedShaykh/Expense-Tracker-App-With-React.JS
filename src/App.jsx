import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import AccountDetails from './Components/AccountDetails';

function App() {
  return (
    <div className='container'>
    <Header />
    <Balance />
    <AccountDetails />
    </div>
  );
}

export default App;