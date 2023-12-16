import React from "react";
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/assets/logo.svg";
import "./navbar.css";
// Bem info to write classes
const Navbar = () => {
  const [toggleMenu, setToggleMune] = useState(false);
  const Menu = () => (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whatgptZ">Whta is GPT-Z</a>
      </p>
      <p>
        <a href="#possibiliti">Open AI</a>
      </p>
      <p>
        <a href="#CaseStudies">Case studies</a>
      </p>
      <p>
        <a href="#Library">Library</a>
      </p>
    </>
  );

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="fff"
            size={27}
            onClick={() => {
              setToggleMune(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="fff"
            size={27}
            onClick={() => {
              setToggleMune(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu__container scale-up-center">
            <div className="gpt3__navbar-menu__container-links">
              <Menu />
            </div>

            <div className="gpt3__navbar-menu__container-links-sign">
              <p>Sign in</p>
              <button>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
