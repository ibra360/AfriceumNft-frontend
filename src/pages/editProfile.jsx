import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import {
  getUser,
  loginUser,
  useAuthDispatch,
  useAuthState,
} from "../contexts/AuthContext";
import { useActiveWeb3React } from "../hooks";
import { UserModel } from "../types/types";
import { isSameAddress } from "../utils/helper";
import ipfs from "../utils/ipfsApi";
import FileUploader from "../components/Utilities/FileUploader";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import Waiting from "../components/Utilities/Waiting";
import { Buffer } from "buffer";
import { retry } from "../utils/retry";

function EditProfile() {
  const { user, token } = useAuthState();

  const [profile, setProfile] = useState(user?.image);
  const [banner, setBanner] = useState(user?.banner);

  // const [user, setUser] = useState(null)

  const handleChangeProfile = (e) => {
    setProfile(URL.createObjectURL(e.target.files[0]));

    var reader = new FileReader();
    reader.onload = function () {
      setProfileBuf(reader.result);
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  };
  const handleChangeBanner = (e) => {
    setBanner(URL.createObjectURL(e.target.files[0]));

    var reader = new FileReader();
    reader.onload = function () {
      setBannerBuf(reader.result);
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  };

  const navigate = useNavigate();

  const [profileBuf, setProfileBuf] = useState(null);

  const [bannerBuf, setBannerBuf] = useState(null);

  const [twitter, setTwitter] = useState(user?.twitter);
  const [instagram, setInstagram] = useState(user?.instagram);
  const [facebook, setFacebook] = useState(user?.facebook);

  const [fullname, setFullName] = useState(user?.fullname);
  const [username, setUsername] = useState(user?.username);
  const [description, setDescription] = useState(user?.description);

  const [isProcessing, setIsProcessing] = useState(false);
  const { account, library } = useActiveWeb3React();

  const dispath = useAuthDispatch();

  const handleUpdate = async () => {
    if (!account) {
      toast.error("Connect your wallet.");
      return;
    }

    if (!isSameAddress(user?.address, account)) {
      toast.error("Invalid User. you can edit only yours");
      return;
    }

    if (!username || !fullname || !description || !facebook || !twitter) {
      toast.error("Some Information are empty!");
      return;
    }

    try {
      setIsProcessing(true);

      console.log("token:", token);

      if (!token) {
        await loginUser(dispath, account, user.nonce, library);
      }

      console.log("start profile image:");

      const trimUserName = username.replace(/\s/g, "");

      let imageUrl = profile;
      if (profileBuf) {
        const result = await ipfs.add(Buffer.from(profileBuf));
        imageUrl = `https://ipfs.io/ipfs/${result.path}`;
      }
      console.log("start banner image:", imageUrl);

      let bannerUrl = banner;

      if (bannerBuf) {
        const result = await ipfs.add(Buffer.from(bannerBuf));
        bannerUrl = `https://ipfs.io/ipfs/${result.path}`;
      }

      console.log("start api:", bannerUrl);

      await axios.post(
        `user/update`,
        qs.stringify({
          address: account,
          username: trimUserName,
          fullname: fullname,
          description: description,
          image: imageUrl,
          banner: bannerUrl,
          twitter,
          facebook,
          instagram,
        })
      );

      console.log("finish api update call");

      await getUser(dispath, account);
      setIsProcessing(false);
      toast.success("User Profile has been updated");
      // navigate('/')
    } catch (error) {
      console.log("error:", error);
      setIsProcessing(false);
    }
  };

  return (
    <div
      className="edit-profile-page pt-[70px]"
      style={{ backgroundColor: "white" }}
    >
      <div className="w-full max-w-5xl px-4 py-10 m-auto edit-profile-inner md:py-20">
        <div className="edit-profile-form">
          <fieldset className="rounded-2xl md:rounded-3xl profile-edit">
            <legend className="px-12 py-2 text-sm font-semibold border border-black border-solid special-btn shadow-white rounded-2xl md:rounded-3xl md:text-lg">
              Edit Profile:
            </legend>
            <div className="w-full mt-5 mb-5 item">
              <label
                htmlFor="profileName"
                className="flex items-center justify-between mb-2 text-sm font-semibold text-black"
              >
                Profile name <span>*</span>
              </label>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                defaultValue={username}
                className="w-full h-12 px-5 text-black border border-black border-solid outline-none rounded-2xl md:rounded-3xl bg-white/30 placeholder:text-black"
                placeholder="Profile Name"
                name="profileName"
                id="profileName"
              />
            </div>
            <div className="w-full mb-5 item">
              <label
                htmlFor="userName"
                className="flex items-center justify-between mb-2 text-sm font-semibold text-black"
              >
                Full name <span>*</span>
              </label>
              <input
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                type="text"
                defaultValue={fullname}
                className="w-full h-12 px-5 text-black border border-black border-solid outline-none rounded-2xl md:rounded-3xl bg-white/30 placeholder:text-black"
                placeholder="User Name"
                name="userName"
                id="userName"
              />
            </div>
            <div className="w-full mb-5 item">
              <label
                htmlFor="profilePic"
                className="flex items-center justify-between mb-2 text-sm font-semibold text-black"
              >
                Profile Picture <span>*</span>
              </label>
              <div className="w-full text-black border border-black border-solid outline-none upload-images h-36 rounded-2xl md:rounded-3xl bg-white/30 placeholder:text-black">
                <input
                  onChange={handleChangeProfile}
                  type="file"
                  className=""
                  placeholder="User Name"
                  name="profilePic"
                  id="profilePic"
                  accept=".jpg, .jpeg, .png, .gif, .svg"
                />
                <img
                  className={`${profile ? "opacity-100" : "opacity-0"}`}
                  src={profile}
                  alt="pic"
                />
                <div
                  className={`intro w-full flex flex-wrap pointer-events-none justify-center items-center ${
                    profile ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="text-center">
                    <p className="mb-2 text-sm text-black">JPG, JPEG, PNG</p>
                    <p className="py-2 text-sm bg-red-300 rounded-2xl md:rounded-3xl px-7">
                      Choose file
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-5 item">
              <label
                htmlFor="profileBanner"
                className="flex items-center justify-between mb-2 text-sm font-semibold text-black"
              >
                Profile Banner <span>*</span>
              </label>
              <div className="w-full text-black border border-black border-solid outline-none upload-images h-36 rounded-2xl md:rounded-3xl bg-white/30 placeholder:text-black">
                <input
                  onChange={handleChangeBanner}
                  type="file"
                  className=""
                  placeholder="User Name"
                  name="profileBanner"
                  id="profileBanner"
                  accept=".jpg, .jpeg, .png, .gif, .svg"
                />
                <img
                  className={`${banner ? "opacity-100" : "opacity-0"}`}
                  src={banner}
                  alt="pic"
                />
                <div
                  className={`intro w-full flex flex-wrap pointer-events-none justify-center items-center ${
                    banner ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="text-center">
                    <p className="mb-2 text-sm text-black">JPG, JPEG, PNG</p>
                    <p className="py-2 text-sm bg-red-300 rounded-2xl md:rounded-3xl px-7">
                      Choose file
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-5 item">
              <label
                htmlFor="about"
                className="flex items-center justify-between mb-2 text-sm font-semibold text-black"
              >
                About <span>*</span>
              </label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                defaultValue={description}
                maxLength={300}
                className="w-full px-5 py-5 text-black border border-black border-solid outline-none h-60 rounded-2xl md:rounded-3xl bg-white/30 placeholder:text-black"
                placeholder="Description"
                name="about"
                id="about"
              ></textarea>
            </div>
            <div className="w-full mb-5 item">
              <label
                htmlFor="facebook"
                className="flex items-center justify-between mb-2 text-sm font-semibold text-black"
              >
                Facebook <span>*</span>
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setFacebook(e.target.value);
                }}
                defaultValue={facebook}
                className="w-full h-12 px-5 text-black border border-black border-solid outline-none rounded-2xl md:rounded-3xl bg-white/30 placeholder:text-black"
                placeholder="Facebook URL"
                name="facebook"
                id="facebook"
              />
            </div>
            <div className="w-full mb-5 item">
              <label
                htmlFor="instagram"
                className="flex items-center justify-between mb-2 text-sm font-semibold text-black"
              >
                Instagram <span>*</span>
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setInstagram(e.target.value);
                }}
                defaultValue={instagram}
                className="w-full h-12 px-5 text-black border border-black border-solid outline-none rounded-2xl md:rounded-3xl bg-white/30 placeholder:text-black"
                placeholder="Instagram URL"
                name="instagram"
                id="instagram"
              />
            </div>
            <div className="w-full mb-5 item">
              <label
                htmlFor="twitter"
                className="flex items-center justify-between mb-2 text-sm font-semibold text-black"
              >
                Twitter <span>*</span>
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setTwitter(e.target.value);
                }}
                defaultValue={twitter}
                className="w-full h-12 px-5 text-black border border-black border-solid outline-none rounded-2xl md:rounded-3xl bg-white/30 placeholder:text-black"
                placeholder="Twitter URL"
                name="twitter"
                id="twitter"
              />
            </div>
            <div className="pt-5 mb-10 submit-btn">
              <button
                onClick={() => {
                  handleUpdate();
                }}
                className="px-16 py-2 text-sm font-semibold special-btn shadow-white md:text-lg"
              >
                Save
              </button>
            </div>
          </fieldset>
        </div>
      </div>

      {isProcessing && <Waiting />}
    </div>
  );
}

export default EditProfile;
