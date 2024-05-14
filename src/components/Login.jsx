import React, { useEffect, useState } from "react";
import Image from "../assets/office.jpg";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";



const Login = ({ onLogin }) => {
  const [ showPassword, setShowPassword ] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const fnEnter = (e) => {
    onLogin();
  };


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Bienvenido a RHPro</h2>
            <h1>Sistema Integral de Recursos Humanos</h1>
            <p>Por favor ingrese sus datos!</p>
            <form>
              <input type="text" placeholder="Usuario"  value={username} onChange={(e) => setUsername(e.target.value)}/>
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Recordarme
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Olvido su contraseña?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button" onClick={fnEnter}>Ingresar</button>
                <button type="button" disabled>
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            No tiene una cuenta? <a href="#" disabled>Registrese</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
