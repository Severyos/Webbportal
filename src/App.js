import React from 'react';
import NavForm from './components/NavForm';

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    const target = event.target;

    // Show mobile menu
    if (target.classList.contains("hamburger-btn")) {
      const navbarMenu = document.querySelector(".navbar .links");
      if (navbarMenu) {
        navbarMenu.classList.toggle("show-menu");
        console.log("Mobile menu toggled");
      }
    }

    // Hide mobile menu
    if (target.classList.contains("close-btn")) {
      const hamburgerBtn = document.querySelector(".hamburger-btn");
      if (hamburgerBtn) {
        hamburgerBtn.click();
        console.log("Mobile menu hidden");
      }
    }

    // Show login popup
    if (target.classList.contains("login-btn")) {
      console.log("Login button clicked");
      document.body.classList.toggle("show-popup");
    }

    // Hide login popup
    if (target.classList.contains("close-btn")) {
      const showPopupBtn = document.querySelector(".login-btn");
      if (showPopupBtn) {
        showPopupBtn.click();
        console.log("Login popup hidden");
      }
    }

    // Show or hide signup form
    if (target.id === "signup-link" || target.id === "login-link") {
      const formPopup = document.querySelector(".form-popup");
      if (formPopup) {
        formPopup.classList[target.id === "signup-link" ? "add" : "remove"]("show-signup");
        console.log("Signup form toggled");
      }
    }
  });
});


const App = () => {
  return (
    <>
      <NavForm />
     
    </>
  );
};

export default App;
