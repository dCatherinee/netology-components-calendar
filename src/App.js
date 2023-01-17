import './App.css';
import Calendar from './Components/Calendar/Calendar';

function App() {
   const now = new Date();

  return (
    <Calendar date={now} />
  );
}

export default App;
