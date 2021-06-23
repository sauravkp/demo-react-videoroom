import React from 'react';
import { useHistory } from "react-router-dom";

 const LandingComponent = () =>{
    const history = useHistory();
     return(
         <div>
              <h1>Hello, My App!</h1>
                <button onClick={()=>{history.push('/admin')}}>Join as Admin</button>
                <button onClick={()=>{history.push('/user')}}>Join as User</button>
             
         </div>
         
     )
 }
export default LandingComponent;
