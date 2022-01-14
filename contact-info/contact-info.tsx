import React, { useEffect, useState } from "react";
import Contactus from "../contact-us/contact-us";
import "./contact-info.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fire from "../../fire";
import Loader from "react-loader-spinner";

function ContactInfo() {
  const [showLoader, setShowLoader] = useState(false);
  const [email, setEmail] = useState<string>();
  const [contactNo, setContactNo] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [subHeading, setsubHeading] = useState<string>();
  const [description, setDescription] = useState<string>();

  useEffect(() => {
    setShowLoader(true);
    var db = fire.database();

    db.ref("contact").once("value", (snapshot: any) => {
      debugger;
      var result = snapshot.val();
        setEmail(result.email);
        setContactNo(result.contactNo);
        setAddress(result.address);
        setsubHeading(result.subHeading);
        setDescription(result.description);
        setShowLoader(false);
    });
   
  }, []);
  return (
    <div className="row contactInfoCont">
      {showLoader && (
        <div className="centered">
          <Loader type="TailSpin" color="#FF9F24" height={100} width={100} />
        </div>
      )}
      <div className="col-sm-10">
        <div className="text-center">
          <h2 className="secondary my-0">Contact Information</h2>
          <p className="mt-4">
          {subHeading}
          </p>
        </div>
        <div className="row mt-5 pt-3">
          <div className="col-sm-5 pr-5 pl-0">
            <p className="desp">
             {description}
            </p>
            <div className="iconCont">
              <div className="icon">
                <FontAwesomeIcon icon={["far", "envelope"]} />
              </div>
              <p>{email}</p>
            </div>
            <div className="iconCont">
              <div className="icon">
                <FontAwesomeIcon icon={["fas", "phone"]} />
              </div>
              <p>{contactNo}</p>
            </div>
            <div className="iconCont">
              <div className="icon">
                <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
              </div>
              <p>{address}</p>
            </div>
          </div>
          <div className="col-sm-7 pr-0">
            <Contactus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
