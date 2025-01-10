import { Link } from "react-router-dom";

export default function About(){
    return(
        <>
            <h1>Welcome to about page</h1>
            <Link to="/" >Home </Link><br/>
            <Link to="/User/krisha">krisha </Link> <br/>
            <Link to="/User/vishva">vishva </Link> <br/>
        </>
    )
}