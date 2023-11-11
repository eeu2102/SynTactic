import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // Renamed for consistency

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState(''); // State to hold the error message


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
  
  // const handleSignUp = async (event) => {
  //   setShowLoginModal(false);
  //   setShowSignUpModal(true);
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('/users', { // Make sure to use the correct endpoint
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ user: { username, password } }), // Rails expects user parameters to be nested under user key
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       // You can store the received token in localStorage or context API and redirect the user
  //       console.log('Signup successful:', data);
  //       setShowSignUpModal(false); // Close the signup modal
  //       navigate('/welcome')
  //     } else {
  //       // if(data.errors && data.errors.username) {
  //         setErrorMessage('Username already exists. Please try another one.');
  //       // }
  //       setUsername(''); // Clear the username state
  //       setPassword('');
  //       // If there are errors (like a non-unique username), handle them here
  //       console.error('Signup failed:', data.errors);
  //     }
  //   } catch (error) {
  //     console.error('There was an error during sign up:', error);
  //   }
  // }

  const handleSignUp = async (event) => {
    setShowLoginModal(false);
    setShowSignUpModal(true);
    event.preventDefault();
    try {
      const response = await fetch('/users', { // Make sure to use the correct endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: { username, password } }), // Rails expects user parameters to be nested under user key
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem('authToken', data.token); // Store the token
      } else {
        console.log('No token received');
      }
      
      if (response.ok) {
        // You can store the received token in localStorage or context API and redirect the user
        console.log('Signup successful:', data);
        
        setShowSignUpModal(false); // Close the signup modal
        navigate('/welcome')
      } else {
        // if(data.errors && data.errors.username) {
          setErrorMessage('Username already exists. Please try another one.');
        // }
        setUsername(''); // Clear the username state
        setPassword('');
        // If there are errors (like a non-unique username), handle them here
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
        console.error('Login failed:', response.statusText);
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
      <button onClick={() => handleShowSignUp()} className="landing__button" id="signup__button">Sign Up</button>
      <button onClick={() => handleShowLogin()} className="landing__button" id="login_button">Login</button>

      {showSignUpModal && (
        <div className="signup__modal">
          {/* <div className="overlay" onClick={() => setShowSignUpModal(false)}></div> */}
          <div className="signup__content">
            <form className="signup__form" onSubmit={handleSignUp}>
                <input 
                  type="text" 
                  placeholder="Username" 
                  required className="signup__input" 
                  id="signup__username"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}/>
                <input 
                  type="password" 
                  placeholder="Password" 
                  required className="signup__input" 
                  id="signup__password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="signup__submit">Sign Up</button>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display the error message */}

          </div>
          
        </div>
      )}

      {showLoginModal && (
        <div className="login__modal">
          {/* <div className="overlay" onClick={() => setShowLoginModal(false)}></div> */}
          <div className="login__content">
            <form className="login__form" onSubmit={handleLogin}>
                <input 
                  type="text" 
                  placeholder="Username" 
                  required className="login__input" 
                  id="login__username"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}/>
                <input 
                  type="password" 
                  placeholder="Password" 
                  required className="login__input" 
                  id="login__password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="login__submit">Login</button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;

