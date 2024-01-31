import React from 'react';
import logo from '../assets/images/Meone_payoff_grey.png';

const NavForm = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <span className="hamburger-btn material-symbols-rounded">Menu</span>
          <a href="#" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <ul className="links">
            <span className="close-btn material-symbols-rounded">Stäng</span>
            <li><a href="#">Företag</a></li>
            <li><a href="#">Aktiviteter</a></li>
            <li><a href="#">Affärsmöjligheter</a></li>
            <li><a href="#">Avtal</a></li>
            <li><a href="#">Dokument</a></li>
            <li><a href="#">Kalender</a></li>
          </ul>
          <button className="login-btn">LOGGA IN</button>
        </nav>
      </header>

      <div className="blur-bg-overlay"></div>
      <div className="form-popup">
        <span className="close-btn material-symbols-rounded">Stäng</span>
        <div className="form-box login">
          <div className="form-details">
            <h2>Välkommen tillbaka!</h2>
            <p>Logga in med din personliga information för att hålla kontakten med oss.</p>
          </div>
          <div className="form-content">
            <h2>LOGGA IN</h2>
            <form action="#">
              <div className="input-field">
                <input type="text" required />
                <label>E-Post</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Lösenord</label>
              </div>
              <a href="#" className="forgot-pass-link">Glömt lösenord?</a>
              <button type="submit">Logga In</button>
            </form>
            <div className="bottom-link">
              Har inget konto registrerad?
              <a href="#" id="signup-link">Skapa konto</a>
            </div>
          </div>
        </div>
        <div className="form-box signup">
          <div className="form-details">
            <h2>Skapa konto</h2>
            <p>För att bli en del av vår community, vänligen registrera dig med din personliga information.</p>
          </div>
          <div className="form-content">
            <h2>REGISTRERA</h2>
            <form action="#">
              <div className="input-field">
                <input type="text" required />
                <label>Skriv e-post</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Skriv lösenord</label>
              </div>
              <div className="policy-text">
                <input type="checkbox" id="policy" />
                <label for="policy">
                  Jag godkänner dessa
                  <a href="#" className="option">Allmänna villkor</a>
                </label>
              </div>
              <button type="submit">Skapa konto</button>
            </form>
            <div className="bottom-link">
              Har du redan ett konto?
              <a href="#" id="login-link">Logga in</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavForm;
