import React, { useState } from "react";
import { axiosWithAuth } from "../endpoint/api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStatus } from "../redux/slices/userSlice";

const Login = () => {
  const [userData, setUserData] = useState({ username: "workintech", password: "wecandoit" });
  const navigate = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", userData)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        dispatch(setStatus(true));
        navigate.push("/friends");
      });
  };

  const handleChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-96 h-96 border rounded flex flex-col p-5 justify-center items-center">
        <span className="font-bold text-2xl pb-5">LOGIN</span>
        <div className="relative w-full my-3">
          <label className="absolute -top-3 start-3 text-sm bg-white px-2 text-gray-500">Username</label>
          <input onChange={handleChange} name="username" id="username" type="text" className="border rounded w-full h-10 px-5" value={userData.username} />
        </div>
        <div className="relative w-full my-3">
          <label className="absolute -top-3 start-3 text-sm bg-white px-2 text-gray-500">Password</label>
          <input onChange={handleChange} name="password" id="password" type="password" className="border rounded w-full h-10 px-5" value={userData.password} />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white w-full h-10 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
