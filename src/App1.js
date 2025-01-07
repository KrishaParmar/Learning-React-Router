import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './component1/Home';
import User from './component1/User';

function App1() {
  return (
    <div className="App">
      {/* <h1>React router</h1> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/User" element={<User/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App1;