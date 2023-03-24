import { useEffect, useState } from "react";

const useLoaggedIn = ()=>{
    const [isLoggedIn , setIsLoggedIn] = useState(true);
    //
    useEffect(()=>{
       
            return(
                <>
                {isLoggedIn? (<button onClick={()=>{setIsLoggedIn(false)}} >Login</button>) : (<button onClick={()=>{setIsLoggedIn(false)}}>Logout</button>) }
                </>
            )
        

    }, []);

    return isLoggedIn
}
export default useLoaggedIn;