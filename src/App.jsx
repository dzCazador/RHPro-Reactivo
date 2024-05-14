import Login from "./components/Login"
import Main from "./components/Main"
import {BrowserRouter,Routes,Route,Link,Navigate } from "react-router-dom"
import React, { useState } from 'react';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true)
  };

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={isAuthenticated ?<Navigate to="/main" />:<Login onLogin={handleLogin} />} />
          <Route path="/main" element={isAuthenticated ?<Main/>:<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
    </>    
  )
}
export default App
