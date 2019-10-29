import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header--inner">
        <div className="logo">
          <a href="#" class="logo--link">
            <img
              class="logo--image"
              src="https://cdn.shopify.com/s/files/1/2427/2865/files/Logo_with_tagline_720x.png?v=1537501208"
              height="80"
            />
          </a>
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
