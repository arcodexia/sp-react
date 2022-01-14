import React from "react";
import "./forgot-password.scss";

function ForgotPassword() {
  return (
    <div>
      <div className="modal fade loginModal" id="ForgotPasswordModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center">
                <img height="45px" src="imgs/Applogo.svg" />
              </div>
              <h6 className="resetDesp">Please enter your email, we'll send you a<br/> link to reset your password</h6>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control loginInputField"
                  placeholder="E-mail"
                />
              </div>
              <button data-dismiss="modal" className="btn logIn-btn mt-4 mb-2">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
