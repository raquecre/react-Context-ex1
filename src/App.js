import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import NextBtn from './components/NextBtn';
import PrevBtn from './components/PrevBtn';
import  CounterContextProvider  from './context';
function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <Counter />
        <NextBtn />
        <PrevBtn />
      </CounterContextProvider>
    </div>
  );
}

export default App;
