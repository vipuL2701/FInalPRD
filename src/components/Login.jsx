import React, { useState } from "react"
import "./Login.css"
import email_icon from "./assets/email.png"
import user_icon from "./assets/person.png"
import password_icon from "./assets/password.png"

const Login =() => {
  const [action,setAction] = useState ("Register")

  return (
    <div className="container">
        
        <div className="text">{action}</div>
        <div className="underline"></div>
       

        <div className="inputs">
          {action==="Login"?<div></div>: <div className="input">
          <img  src={user_icon} alt="" />
         <input type="text" placeholder="First Name" />
         <input type="text" placeholder="Last Name" />
      </div>
      }
       
      <div className="input">
        <img src={email_icon} alt="" />
        <input type="email" placeholder="Email Id" />
       
      </div>

      <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder="Password"/>
      </div>
     </div>
       {action==="Register"?<div></div>: 
       <div className="forgot-password">Forgot Password?<span>Click here</span></div>}
    
    <div className="submit-container">
     <div className={action==="Login"?"submit gray" :"submit"}
     onClick={() =>(setAction("Register"))}>SignUp</div>
    <div className={action==="Register"?"submit gray" :"submit"}
     onClick={() =>(setAction("Login"))}>Login</div>   
     </div>
    </div>
  )
}

export default Login