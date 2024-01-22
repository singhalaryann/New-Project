import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/user.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {

  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text"> {action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
        {action === "Registration" && (
          <div>
            {/* Gender Section */}
            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>

            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        )}
      </div>
      {action === "Registration" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Registration") }}>Registration</div>
        <div className={action === "Registration" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
      </div>
    </div>
  );
};


export default LoginSignup;
