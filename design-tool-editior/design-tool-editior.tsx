import React from "react";
import "./design-tool-editior.scss";

function DesignToolEditior() {
  return (
    <div className="row designToolEditCont">
      <div className="col-sm-11 px-0">
        <div className="text-center">
          <h2 className="secondary">Online Design Tool</h2>
          <p className="appTxt pt-2 mb-0">Let’s Edit your Vinyl Banner </p>
        </div>
        <img src="imgs/designTool.png" className="mt-5" width="100%" />
      </div>
    </div>
  );
}

export default DesignToolEditior;
