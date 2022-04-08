import logo from './logo.svg';
import './App.css';
import Counter from './Components/Redux/Counter';
import CounterTwo from './Components/Redux/CounterTwo';
import Users from './Components/Redux/Users';

function App() {
  return (
    <div className="App">
       {/* <Counter />
       <CounterTwo /> */}
       <h2>Synchronous vs Asynchronous</h2>
       <Users />
    </div>
  );
}

export default App;
