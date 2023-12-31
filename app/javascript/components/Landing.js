import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // Renamed for consistency

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginErrorMessage, setLoginErrorMessage] = useState(''); // State to hold the error message
  const [signupErrorMessage, setSignupErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleShowSignUp = () => {
    setShowLoginModal(false);
    setShowSignUpModal(true);
    setUsername(''); // Clear the username state
    setPassword('');
  }

  const handleShowLogin = () => {
    setShowSignUpModal(false);
    setShowLoginModal(true);
    setUsername(''); // Clear the username state
    setPassword('');
  }
  
  const handleSignUp = async (event) => {

    setShowLoginModal(false);
    setShowSignUpModal(true);
    event.preventDefault();
    try {
      const response = await fetch('/users', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: { username, password } }), 
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem('authToken', data.token); // Store the token
      } else {
        console.log('No token received');
      }
      
      if (response.ok) {
        console.log('Signup successful:', data);
        
        setShowSignUpModal(false); // Close the signup modal
        navigate('/welcome')
      } else {
          setSignupErrorMessage('Username already exists. Please try another one.');
        setUsername(''); 
        setPassword('');
        console.error('Signup failed:', data.errors);
      }
    } catch (error) {
      console.error('There was an error during sign up:', error);
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include', // Include credentials if using cookies
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
  
        // If token-based, store the token. Adjust according to your API response
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
  
        setShowLoginModal(false); 
        navigate('/home'); 
      } else {
        if (response.status === 404) {
          setLoginErrorMessage('User doesn\'t exist. Please try again.');
        } else {
        console.error('Login failed:', response.statusText);
        setLoginErrorMessage('Login failed. Please try again.');
        }
      }
  
      // Clear the form fields
      setUsername(''); 
      setPassword('');
    } catch (error) {
      console.error('There was an error during login:', error);
    }
  };
  
  
  return (
    <div className="landing__container">
      <div className="landing__content">
        <div className="landing__text">
          <p className="landing__quote">Your shortcut to syntax <span id="mastery">mastery</span></p>
          <p className="landing__subquote">No more wasting time scouring documentation or cheatsheets. Streamline your coding interview prep with SynTactic today.</p>
        </div>
        <span id="orange__circle"></span>
        <span id="blue__circle"></span>
        <div className="landing__buttons">
          <button onClick={() => handleShowSignUp()} className="landing__button" id="signup__button" disabled={showSignUpModal || showLoginModal}>Sign Up</button>
          <button onClick={() => handleShowLogin()} className="landing__button" id="login__button" disabled={showSignUpModal || showLoginModal}>Login</button>
        </div>
      </div>

     {showSignUpModal && (
        <div className="signup__content">
          {/* <div className="overlay" onClick={() => setShowSignUpModal(false), setSignupErrorMessage("")}></div> */}
          <div className="overlay" onClick={() => { setShowSignUpModal(false); setSignupErrorMessage(""); }}></div>

          <div className="signup__modal">
            <form className="signup__form" onSubmit={handleSignUp}>
                <label htmlFor="signup__username">Username</label>
                <input 
                  type="text" 
                  placeholder="Username" 
                  required className="signup__input" 
                  id="signup__username"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="signup__password">Password</label>
                <input 
                  type="password" 
                  placeholder="Password" 
                  required className="signup__input" 
                  id="signup__password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="signup__submit">Sign Up</button>
            </form>
            {signupErrorMessage && <div className="error-message">
              {signupErrorMessage}
            </div>} 

          </div>
          
        </div>
      )}

      {showLoginModal && (
        <div className="login__content">
          <div className="overlay" onClick={() => { setShowLoginModal(false); setLoginErrorMessage("");}}></div>
          <div className="login__modal">
            <form className="login__form" onSubmit={handleLogin}>
                <label htmlFor="login__username">Username</label>
                <input 
                  type="text" 
                  placeholder="Username" 
                  required className="login__input" 
                  id="login__username"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="login__password">Password</label>
                <input 
                  type="password" 
                  placeholder="Password" 
                  required className="login__input" 
                  id="login__password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="login__submit">Login</button>
            </form>
            {loginErrorMessage && <div className="error-message">{loginErrorMessage}</div>}

          </div>
        </div>
      )}
      
    </div>
  );
};

export default Landing;

