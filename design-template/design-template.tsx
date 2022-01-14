import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import fire from "../../fire";
import "./design-template.scss";

function Designtemplate() {
  const [showLoader, setShowLoader] = useState(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [imgUrl, setImgUrl] = useState<any>();

  useEffect(() => {
    setShowLoader(true);
    var db = fire.database();

    db.ref("designIt").once("value", (snapshot: any) => {
      debugger;
      var result = snapshot.val();
        setTitle(result.title);
        setDescription(result.description);
        setImgUrl(result.imageURL);
        setShowLoader(false);
    });
   
  }, []);
  return (
    <div className="row freeTemplateCont">
      {showLoader && (
        <div className="centered">
          <Loader type="TailSpin" color="#FF9F24" height={100} width={100} />
        </div>
      )}
      <div className="col-sm-10 px-0">
        <div className="row justify-content-between">
          <div className="col-sm-5 text-center">
            <img src={imgUrl} width="85%"></img>
          </div>
          <div className="col-sm-6 pl-0 pr-4 align-center">
            <h3 className="mb-3">{title}</h3>
            <p className="font-17">
             {description}
            </p>
            <Link to="/products">
            <button className="btn primaryBtn">Go to free templates</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designtemplate;
