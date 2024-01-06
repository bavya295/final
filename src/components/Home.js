import { Link } from "react-router-dom"
export default function Home(){
    return(
        <>
         <h1>Happy birthday</h1>
        <Link to="/register">
            <button>Clcike me</button>
           
        </Link>
        </>
    )
}