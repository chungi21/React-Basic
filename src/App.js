import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello'; 
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
