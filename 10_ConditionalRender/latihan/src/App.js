import './App.css';
import React, { useState } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [text, setText] = useState("Please Login");

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    setText("Welcome Back!");
    console.log("Login");
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setText("Please Login")
  };

  const greeting = () => {
    // IF ELSE
    // if(isLoggedIn){
    //   return <LogoutButton onClick={handleLogoutClick} />;
    // }else{
    //   return <LoginButton onClick={handleLoginClick} />;
    // }

    // SWITCH CASE
    switch (isLoggedIn) {
      case (true):
        return <LogoutButton onClick={handleLogoutClick} />;
      case (false):
      default:
        return <LoginButton onClick={handleLoginClick} />;
    }

    // TERNARY OPERATOR
    // return (
    //   <div>
    //     {isLoggedIn
    //     ? <LogoutButton onClick={handleLogoutClick} />
    //     : <LoginButton onClick={handleLoginClick} />
    //     }
    //   </div>
    // );

    // LOGICAL AND OPERATOR
    // return (
    //   <div>
    //     {isLoggedIn && <LogoutButton onClick={handleLogoutClick} />}
    //     {!isLoggedIn && <LoginButton onClick={handleLoginClick} />}
    //   </div>
    //   );
  };

  return (
    <div className="App">
      <h1>{text}</h1>
      {greeting()}
    </div>
  );
}

export default App;
