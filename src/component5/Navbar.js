import { Link,NavLink } from "react-router-dom"
import './Navbar.css'
export default function Navbar(){
    return(
        <>
            
            <ul className="navbar">
            {/* <li><NavLink  className= "nav-bar-link" style={{color:'red'}}  to="/" >Home </NavLink><br/></li> */}
            <li><NavLink  className= "nav-bar-link"   to="/" >Home </NavLink><br/></li>
            <li><NavLink className= "nav-bar-link"  to="/Contect">Contect </NavLink><br/></li>
            <li><NavLink  className= "nav-bar-link" to="/about">About</NavLink><br/></li>
            
            </ul>
        </>
    )
}