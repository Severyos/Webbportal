import React from 'react';
import logo from '../assets/images/Meone_payoff_grey.png';

const NavForm = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <span className="hamburger-btn material-symbols-rounded">menu</span>
          <a href="#" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <ul className="links">
            <span className="close-btn material-symbols-rounded">close</span>
            <li><a href="#">Företag</a></li>
            <li><a href="#">Aktiviteter</a></li>
            <li><a href="#">Affärsmöjligheter</a></li>
            <li><a href="#">Avtal</a></li>
            <li><a href="#">Dokument</a></li>
            <li><a href="#">Kalender</a></li>
          </ul>
          <button className="login-btn">LOG IN</button>
        </nav>
      </header>

      <div className="blur-bg-overlay"></div>
      <div className="form-popup">
        <span className="close-btn material-symbols-rounded">close</span>
        <div className="form-box login">
          <div className="form-details">
            <h2>Welcome Back</h2>
            <p>Please log in using your personal information to stay connected with us.</p>
          </div>
          <div className="form-content">
            <h2>LOGIN</h2>
            <form action="#">
              <div className="input-field">
                <input type="text" required />
                <label>Email</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Password</label>
              </div>
              <a href="#" className="forgot-pass-link">Forgot password?</a>
              <button type="submit">Log In</button>
            </form>
            <div className="bottom-link">
              Don't have an account?
              <a href="#" id="signup-link">Signup</a>
            </div>
          </div>
        </div>
        <div className="form-box signup">
          <div className="form-details">
            <h2>Create Account</h2>
            <p>To become a part of our community, please sign up using your personal information.</p>
          </div>
          <div className="form-content">
            <h2>SIGNUP</h2>
            <form action="#">
              <div className="input-field">
                <input type="text" required />
                <label>Enter your email</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Create password</label>
              </div>
              <div className="policy-text">
                <input type="checkbox" id="policy" />
                <label for="policy">
                  I agree the
                  <a href="#" className="option">Terms & Conditions</a>
                </label>
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <div className="bottom-link">
              Already have an account?
              <a href="#" id="login-link">Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavForm;
