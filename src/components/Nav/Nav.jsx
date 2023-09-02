import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <>
      <div className="nav-main-con">
        <div className="nav-left">
          <h2 className="nav-logo">EduPilot</h2>
          <ul className="nav-left-menus">
            <li>
              <a href="/tools" className="nav-link"></a>
            </li>
            <li>
              <a href="/chat" className="nav-link">
                Chat
              </a>
            </li>
            <li>
              <a href="/recommendation" className="nav-link">
                Recommedation
                <span className="nav-span">New</span>
              </a>
            </li>
          </ul>
        </div>
        <ul className="nav-right-menus">
          <li>
            <a href="/signin" className="menu-btn menu-btn-signin">
              Sign In
            </a>
          </li>
          <li>
            <a href="/signup" className="menu-btn menu-btn-signup">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </>
    //     <div className="nav-main-container">
    //       <h2 className="nav-logo">EduPilot</h2>
    //       <ul className="nav-menus-container">
    //         <li>
    //           <a href="#" className="nav-links">
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="nav-links">
    //             Chat
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="nav-links">
    //             Recommendation
    //           </a>
    //         </li>
    //         {/* <li>
    //           <a href="#" className="nav-links">
    //             Contact
    //           </a>
    //         </li> */}
    //       </ul>
    //       <ul className="nav-buttons-container">
    //         <button className="btn-login">Log In</button>
    //         <button className="btn-signup">Get started</button>
    //       </ul>
    //       {/* <RxHamburgerMenu className="nav-hamburger" /> */}
    //     </div>
  );
};

export default Nav;
