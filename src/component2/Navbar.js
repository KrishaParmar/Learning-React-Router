import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <>
            {/* <Link to="/User">User </Link> <br/>
            <Link to="/">Home </Link> */}
            <a href="/User">User</a>
            <a href="/">Home</a>
        </>
    )
}