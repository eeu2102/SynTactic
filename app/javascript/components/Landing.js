import React, { useState } from "react";
import "./Landing.css";

const Landing = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // Renamed for consistency

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleSignUp = async (event) => {
  //   event.preventDefault(); // Prevent the form from submitting traditionally
  //   try {
  //     const response = await fetch('your-backend-api-url/signup', { // Replace with your actual API endpoint
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (response.ok) {
  //       // Handle successful signup
  //       console.log('Signup successful');
  //       setShowSignUpModal(false);
  //     } else {
  //       // Handle errors, for example show an error message
  //       console.log('Signup failed');
  //     }
  //   } catch (error) {
  //     // Handle network errors or other unexpected issues
  //     console.error('There was an error!', error);
  //   }
  // };

  const handleSignUp = async (event) => {
    
  }

  return (
    <div className="landing__container">
      <button onClick={() => setShowSignUpModal(true)} className="landing__button" id="signup__button">Sign Up</button>
      <button onClick={() => setShowLoginModal(true)} className="landing__button" id="login_button">Login</button>

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

          </div>
          
        </div>
      )}

      {showLoginModal && (
        <div className="login__modal">
          {/* <div className="overlay" onClick={() => setShowLoginModal(false)}></div> */}
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

          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
