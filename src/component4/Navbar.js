import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <>
            
            <Link to="/">Home </Link><br/>
            <Link to="/Contect">Contect </Link><br/>
            <Link to="/about">About</Link><br/>
            <Link to="/User/krisha">krisha </Link> <br/>
            <Link to="/User/vishva">vishva </Link> <br/>
        </>
    )
}