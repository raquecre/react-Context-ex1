import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import NextBtn from './components/NextBtn';
import PrevBtn from './components/PrevBtn';
import  CounterContextProvider  from './context';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <Counter />
        <PrevBtn />
        <NextBtn />
      </CounterContextProvider>
    </div>
  );
}

export default App;
