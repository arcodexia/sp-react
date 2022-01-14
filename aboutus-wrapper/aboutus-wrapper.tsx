import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import fire from "../../fire";
import "./aboutus-wrapper.scss";

function AboutUsWrapper() {
  const [showLoader, setShowLoader] = useState(false);
  const [description, setDescription] = useState<string>();
  const [isDisabled, setIsDisabled] = useState(true);
  const [imgFile, setImgFile] = useState();
  const [imgUrl, setImgUrl] = useState<any>();

  useEffect(() => {
    setShowLoader(true);
    var db = fire.database();

    db.ref("about").once("value", (snapshot: any) => {
      debugger;
      var result = snapshot.val();
        setDescription(result.description);
        setImgUrl(result.imageURL);
        setShowLoader(false);
    });
   
  }, []);

  return (
    <div>
      <div
        className="aboutusBgCont"
        style={{ backgroundImage: "url(imgs/about.jpg)" }}
      >
        {showLoader && (
        <div className="centered">
          <Loader type="TailSpin" color="#FF9F24" height={100} width={100} />
        </div>
      )}
        <div className="aboutusTxtCont">
          <div className="txt">
            <h1>About Us</h1>
            <p className="despText">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsWrapper;
