import React from "react";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="socialIcon">
      <i className="fab fa-facebook-square" />
      <i className="fab fa-instagram" />
      <i className="fab fa-spotify" />
      <i className="fab fa-whatsapp" />
        {/* <img src="imgs/fbIcon.svg" />
        <img src="imgs/instaIcon.svg" />
        <img src="imgs/msgIcon.svg" />
        <img src="imgs/whatsappIcon.svg" /> */}
      </div>
      <p className="cellNumb">(801) 699-4532</p>
      <p className="my-0">Jakson@signageprint.com</p>
    </div>
  );
}

export default Header;
