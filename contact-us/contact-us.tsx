import React from "react";
import "./contact-us.scss";

function Contactus() {
  return (
    <div className="contactusForm">
      <div className="row justify-content-center">
        <div className="col-sm-11">
          <h3 className="secondary mb-4">Get in Touch</h3>
          <div className="row">
            <div className="col-sm-6 pl-0">
              <div className="form-group contactusInputCont">
                <label>Name </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 pr-0">
              <div className="form-group contactusInputCont">
                <label>Email </label>
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 pl-0">
              <div className="form-group contactusInputCont">
                <label>Phone No.</label>
                <input type="tel" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 pr-0">
              <div className="form-group contactusInputCont">
                <label>I am looking for </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-9 pl-0">
              <div className="form-group contactusInputCont mb-2">
                <label>Comments</label>
                <textarea rows={3} className="form-control"></textarea>
              </div>
            </div>
            <div className="col-sm-3 pr-0 sendBtnCont">
                <button className="btn primaryBtn btn-block">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
