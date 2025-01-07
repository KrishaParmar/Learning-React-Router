import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import Home from './component2/Home';
import User from './component2/User';
import Navbar from './component2/Navbar';


function App2() {
  return (
    <div className="App">
      {/* <h1>React router</h1> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/User" element={<User/>} />
        </Routes>
            <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App2;