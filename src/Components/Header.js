import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
   <a href="/" className="logo-heading">
     <p><b>FoodVilla</b></p> 
   </a>
 );

 
 const HeaderComponent = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(true);
   return (
     <div className="header">
       <Title />
       <div className="nav-items">
         <ul>
          <li><Link to="/">  Home</Link></li> 
          <li><Link to="/about">About</Link></li> 
          <li><Link to="/contact">Contact</Link></li> 
          <li><Link to="/cart">Cart</Link></li> 
         </ul>
       </div>
       {isLoggedIn? (<button onClick={()=>{setIsLoggedIn(false)}} >Login</button>) : (<button onClick={()=>{setIsLoggedIn(true)}}>Logout</button>) }
     </div>
   );
 };
export default HeaderComponent;