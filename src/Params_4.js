import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Link, Navigate} from 'react-router-dom';
import Home from './component4/Home';
import User from './component4/User';
import Navbar from './component4/Navbar';
import Page404 from './component4/Page404';
import About from './component4/About';


function Params() {
  return (
    <div className="App">
      {/* <h1>React router</h1> */}
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/User/:name" element={<User/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/*" element={<Navigate to="/"/>} /> 

            

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default Params;