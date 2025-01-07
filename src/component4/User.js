import { useParams } from "react-router-dom"

export default function User(){
    const params = useParams();
    const {name} = params;
    console.log(name);
    
    return(
        <h1>{name}'s Page</h1>
    )
}