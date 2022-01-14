import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className="row footerCont">
      <div className="col-sm-4 col-12 pl-0">
        <div className="d-flex justify-content-between">
          <h5 className="my-0 mr-2 pointer">SignagePrint</h5>
          <p className="my-0">2020 The End. All rights Reserved.</p>
        </div>
      </div>
      <div className="col-sm-7 pr-0 col-12">
        <div className="d-flex justify-content-end">
          <div className="linksCont">
            <p>Terms & Conditions</p>
            <p className="px-2">Privacy Policy</p>
            <p>Legal Policy</p>
          </div>
          <div className="socialIcons">
            <div className="icon">
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={["fab", "spotify"]} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
