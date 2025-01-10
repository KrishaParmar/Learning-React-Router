import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Link, Navigate} from 'react-router-dom';
import Home from './component5/Home';
import User from './component5/User';
import Navbar from './component5/Navbar';
import Page404 from './component5/Page404';
import About from './component5/About';


function NavbarLinkStyle() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/User/:name" element={<User/>} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/*" element={<Navigate to="/"/>} />  */}
            <Route path="/*" element={<Page404/>} /> 


            

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default NavbarLinkStyle;