import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import fire from "../../fire";
import "./banner.scss";

function Banner() {
  const [showLoader, setShowLoader] = useState(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [featureA, setFeatureA] = useState<string>();
  const [featureB, setFeatureB] = useState<string>();
  const [featureC, setFeatureC] = useState<string>();
  const [imgUrl, setImgUrl] = useState<any>();

  useEffect(() => {
    setShowLoader(true);
    var db = fire.database();

    db.ref("homeBanner").once("value", (snapshot: any) => {
      debugger;
      var result = snapshot.val();
        setTitle(result.title);
        setFeatureA(result.featureA);
        setFeatureB(result.featureB);
        setFeatureC(result.featureC);
        setDescription(result.description);
        setImgUrl(result.imageURL);
        setShowLoader(false);
    });
   
  }, []);


  return (
    <>
    {showLoader ? (
      <div className="centered">
        <Loader type="TailSpin" color="#FF9F24" height={100} width={100} />
      </div>
    )
    :
    <div
      className="bgCont"
      style={{ backgroundImage: 'url(' + imgUrl + ')' }}
    >
      
      <div className="txtContainer">
        <div className="row content">
          <div className="col-sm-11">
            <h1>
              {title}
              {/* <br />
              Business Advertising */}
            </h1>
            <p className="appTxt mt-4 mb-5">
             {description}
              {/* <br />
              business recognition, advertising and branding. */}
            </p>
            <Link to="/products">
            <button className="btn primaryBtn">Shop Now</button>
            </Link>
            <Link to="/our-process">
            <button className="btn btn-outline-secondary ml-4">Learn More</button>
            </Link>
            <div className="features mt-5">
              <div className="featureCont">
                <div className="circle"></div>
                <p>{featureA}</p>
              </div>
              <div className="featureCont">
                <div className="circle"></div>
                <p>{featureB}</p>
              </div>
              <div className="featureCont">
                <div className="circle"></div>
                <p>{featureC}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
}
    </>
  
  );
}

export default Banner;
