import { useRouteError } from "react-router-dom";
    
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
 return(
    <>
    <div>
        <h1>Oops!<br/> SomeThing went wrong</h1>
        <p> <b>{err.status + "" + err.statusText} </b> </p>
    </div>
    </>
    )
}
export default Error;