import Cookies from "js-cookie";
import { setuid } from "process";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import fire, { storage } from "../../fire";
import "./edit-profile.scss";

function EditProfile() {
  const [uid, setUid] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [picture, setPicture] = useState("imgs/userImage.png");
  const [isDisabled, setIsDisabled] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const userId = Cookies.get("uid")!;
    if (!userId) {
      window.location.assign("/");
    }
    setShowLoader(true);
    setUid(userId);
    fire
      .database()
      .ref(`users/${userId}`)
      .once("value", (snapshot) => {
        var userDetails = snapshot.val();
        if (userDetails) {
          setFirstName(userDetails.firstName);
          setLastName(userDetails.lastName);
          setPhoneNo(userDetails.phoneNo);
          setAddress(userDetails.address);
          setEmail(userDetails.email);
          setPicture(userDetails.picture);
        }
        setShowLoader(false);
      });
  }, []);

  const handleUpdatedInfo = () => {
    //setShowLoader(true);
    fire
      .database()
      .ref(`users/${uid}`)
      .update({
        firstName: firstName,
        lastName: lastName,
        phoneNo: phoneNo,
        address: address,
        picture: picture,
      })
      .then(() => {
        //setIsDisabled(true);
        //setShowLoader(false);
        window.location.reload();
      });
  };

  const uploadPhoto = (e: any) => {
    setShowLoader(true);
    e.preventDefault();
    const file = e.target.files[0];

    const uploadTask = storage.ref(`/usersProfilePic/${uid}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("usersProfilePic")
        .child(uid)
        .getDownloadURL()
        .then((url) => {
          setPicture(url);
        });
      setShowLoader(false);
    });
  };

  return (
    <div>
      {uid && (
        <div className="row pb-5 justify-content-center profileMainCont">
          <div className="col-sm-8">
            {showLoader && (
              <div className="centered">
                <Loader
                  type="TailSpin"
                  color="#ff6a02"
                  height={100}
                  width={100}
                />
              </div>
            )}
            {isDisabled == true ? (
              <div className="text-center pb-2">
                <img
                  className="userProfileImg"
                  src={picture ? picture : "imgs/userImage.png"}
                />
              </div>
            ) : (
              <div className="text-center pb-2">
                <label className="custom-file-upload fas">
                  <div className="img-wrap img-upload">
                    <img className="userProfileImg" src={picture} />
                  </div>
                  <input
                    className="uploadBtn"
                    id="photo-upload"
                    type="file"
                    accept="image/x-png,image/jpeg, image/jpg"
                    onChange={uploadPhoto}
                  />
                </label>
              </div>
            )}
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group editProfileInput">
                  <label>First Name </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={isDisabled}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group editProfileInput">
                  <label>Last Name </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={isDisabled}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group editProfileInput">
                  <label>Email </label>
                  <input
                    type="email"
                    className="form-control"
                    defaultValue={email}
                    disabled
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group editProfileInput">
                  <label>Phone Number </label>
                  <input
                    type="tel"
                    className="form-control"
                    defaultValue={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    disabled={isDisabled}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group editProfileInput">
                  <label>Address</label>
                  <textarea
                    rows={3}
                    className="form-control"
                    defaultValue={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={isDisabled}
                  ></textarea>
                </div>
              </div>
            </div>
            {!isDisabled && (
              <div className="text-center mt-4">
                <button
                  className="btn primaryBtn profileSaveBtn"
                  onClick={handleUpdatedInfo}
                >
                  Save
                </button>
              </div>
            )}
            {isDisabled && (
              <div className="text-center mt-4">
                <button
                  className="btn primaryBtn profileSaveBtn"
                  onClick={() => setIsDisabled(false)}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default EditProfile;
