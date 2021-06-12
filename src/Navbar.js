import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <div>
      <div className="topbar">
        <div className="logo">
          <a
            href="https://www.edyoda.com/stories"
            target="_blank"
          >
           <span className="menu-items"> EDYODA</span>
           <span><p className="under-logo">Stories</p></span>
          </a>
        </div>
        <div className="explore">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Explore Categories
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a className="dropdown-item" href="#">Cloud Computing</a></li>
            <li><a className="dropdown-item" href="#">DevOps</a></li>
            <li><a className="dropdown-item" href="#">Programming Languages</a></li>
            <li><a className="dropdown-item" href="#">Mobile Application Development</a></li>
            <li><a className="dropdown-item" href="#">Technology and Tools</a></li>
            <li><a className="dropdown-item" href="#">Get a Job in a Tech Company</a></li>
            <li><a className="dropdown-item" href="#">Others</a></li>
            </ul>
          </div>
        </div>
        <div className="about">
         <p>
         EdYoda is free learning and knowledge
           sharing platform for techies
         </p>
        </div>
        <div className="btn">
          <a href="https://www.edyoda.com/stories">Go To Main Website</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
