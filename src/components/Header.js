import React from "react";
import { Link } from "react-router-dom";

// components
import CustomLink from './CustomLink';

const Header = () => (
  <header>
    <div className="brand">
      <Link to="/"> ChatApp</Link>
    </div>
    <nav>
      <ul>
        <li>
            <CustomLink 
                activeOnlyWhenExact={true}
                to="/" 
                label="Home" 
            />
        </li>
        <li>
            <CustomLink 
                to="/chat" 
                label="Chat" 
            />
        </li>

        <li>
            <CustomLink 
                to="/join" 
                label="Join" 
            />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
