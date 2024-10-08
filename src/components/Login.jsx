import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";

import { Videos, ChannelCard } from ".";
import { loginApi, loginFacebookApi } from "../utils/fetchFromAPI";
import { toast } from "react-toastify";
import ReactFacebookLogin from "react-facebook-login";

const Login = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div className="p-5 " style={{ minHeight: "100vh" }}>
      <div className=" d-flex justify-content-center">
        <form className="row g-3 text-white">
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>

          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
              Password
            </label>
            <input className="form-control" id="pass" />
          </div>
          <div className="col-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                let email = document.getElementById("email").value;
                let pass_word = document.getElementById("pass").value;
                console.log(`email: ${email}; pass_word: ${pass_word}`);
                loginApi({ email, pass_word })
                  .then((result) => {
                    console.log(result);
                    // tạo thông báo login thành công
                    toast.success(result.message);
                    // lưu access token trong local sstorage của browser
                    localStorage.setItem("LOGIN_USER", result.data);
                    // chuyển hướng sang trang chủ sau khi login thành công
                    navigate("/");
                  })
                  .catch((error) => {
                    // alert("Invalid email or password")
                    console.log(error.response.data.message);
                    toast.error(error.response.data.message);
                  });
              }}
            >
              Login
            </button>
            <ReactFacebookLogin
              appId="1210527583616206"
              fields="name, email,picture"
              callback={(response) => {
                // console.log(response);
                let { id, email, name } = response;
                loginFacebookApi({ id, email, name })
                  .then((result) => {
                    toast.success(result.message);
                    localStorage.setItem("LOGIN_USER", result.data);
                    navigate("/");
                  })
                  .catch((error) => {
                    // console.log(error.response.data.message);
                    toast.error(error.response.data.message);
                  });
              }}
            ></ReactFacebookLogin>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
