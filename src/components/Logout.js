import React from "react";
import { axiosWithAuth } from "../endpoint/api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStatus } from "../redux/slices/userSlice";

const Logout = () => {
  const navigate = useHistory();
  const dispatch = useDispatch();

  setTimeout(() => {
    axiosWithAuth()
      .post("/logout")
      .then((resp) => {
        localStorage.removeItem("token");
        dispatch(setStatus(false));
        navigate.push("/login");
      });
  }, 2000);

  return (
    <div className="h-screen flex items-center justify-center">
      <span>Logout...</span>
    </div>
  );
};

export default Logout;
