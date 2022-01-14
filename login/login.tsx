import Cookies from "js-cookie";
import React, { useState } from "react";
import Loader from "react-loader-spinner";
import fire from "../../fire";
import "./login.scss";

type Props = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

function Login(props: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleSignIn = (event: any) => {
    event.preventDefault();
    setIsInvalid(false);
    setShowLoader(true);
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp: any) => {
        fire
          .database()
          .ref("users")
          .orderByChild("uid")
          .equalTo(resp.user.uid)
          .once("value", (snapshot) => {
            var userDetails = snapshot.val();
            if (userDetails) {
              Cookies.set("uid", resp.user.uid);
              window.location.reload();
            }
          });
      })
      .catch((err) => {
        if (
          err.code == "auth/user-not-found" ||
          err.code == "auth/invalid-email" ||
          "auth/wrong-password"
        ) {
          setIsInvalid(true);
          setShowLoader(false);
        } else {
          alert("Error signing in " + err.code);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <div className="modal fade loginModal" id="loginModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="mb-5 text-center">
                  <img height="45px" src="imgs/Applogo.svg" />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control loginInputField"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="form-group" style={{ position: "relative" }}>
                  <input
                    className="form-control loginInputField passwordField"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                  />
                  <div className="eyeIcon">
                    <i
                      className="fas fa-eye-slash"
                      onClick={() => setShowPassword(!showPassword)}
                    ></i>
                    {/* <i className="fas fa-eye"></i> */}
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <div className="custom-control mt-0 invalid-text font-15">
                    {isInvalid && <p>Your Email or Password is incorrect.</p>}
                  </div>
                  <h6
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#ForgotPasswordModal"
                    className="mb-0 text-muted hoverItem font-14 pt-1 pointer"
                  >
                    Forgot password?
                  </h6>
                </div>

                {/* <div className="row justify-content-between my-3">
                <div className="col-sm-6 col-6 pl-0 pr-3">
                  <button className="btn btn-info socialMediaLogin">
                    <i className="fab fa-facebook-f mr-2"></i>Facebook
                  </button>
                </div>
                <div className="col-sm-6 col-6 pr-0 pl-3">
                  <button className="btn btn-info socialMediaLogin gmailLoginBtn">
                    <img className="mr-2" src="imgs/gmailIcon.svg" /> Gmail
                  </button>
                </div>
              </div> */}
                {showLoader && <div className="centered">
                  <Loader
                    type="TailSpin"
                    color="#ff6a02"
                    height={100}
                    width={100}
                  />
                </div>}
                
                <button className="btn logIn-btn">Sign in</button>
                <div className="d-flex justify-content-center mt-4">
                  <p className="mb-0 font-15"> not a member yet?</p>
                  <p
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#signupModal"
                    className="pointer mb-0 ml-3 hoverItem font-15 bold"
                  >
                    Sign Up
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
