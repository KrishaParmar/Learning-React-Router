import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Link, Navigate} from 'react-router-dom';
import Home from './component3/Home';
import User from './component3/User';
import Navbar from './component3/Navbar';
import Page404 from './component3/Page404';


function PageNotFound() {
  return (
    <div className="App">
      {/* <h1>React router</h1> */}
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/User" element={<User/>} />
            {/* <Route path="/Contect" element={<Page404/>} /> */}
            <Route path="/*" element={<Navigate to="/"/>} /> 

            {/* <Route path="/*" element={<h1>Page not found</h1>}/> */}
            

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default PageNotFound;