import { useParams,Link } from "react-router-dom"

export default function User(){
    const params = useParams();
    const {name} = params;
    // console.log(name);
    
    return(
        <>
        <h1>{name}'s Page</h1>
        <Link to='/About'>go to about page</Link><br/>
        <Link to="/User/krisha">krisha </Link> <br/>
            <Link to="/User/vishva">vishva </Link> <br/>
        </>
    )
}