import React, { useState } from "react";
import { axiosWithAuth } from "../endpoint/api";
import { useHistory } from "react-router-dom";

const AddFriend = () => {
  const [friendData, setFriendData] = useState({ name: "asd", email: "" });
  const navigate = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friendData)
      .then((resp) => {
        navigate.push("/friends");
      });
  };

  const handleChange = (e) => setFriendData({ ...friendData, [e.target.name]: e.target.value });

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-96 h-96 border rounded flex flex-col p-5 justify-center items-center">
        <span className="font-bold text-2xl pb-5">ADD FRIEND</span>
        <div className="relative w-full my-3">
          <label className="absolute -top-3 start-3 text-sm bg-white px-2 text-gray-500">Friend Name</label>
          <input onChange={handleChange} required name="name" id="name" type="text" className="border rounded w-full h-10 px-5" value={friendData.name} />
        </div>
        <div className="relative w-full my-3">
          <label className="absolute -top-3 start-3 text-sm bg-white px-2 text-gray-500">Friend Email</label>
          <input onChange={handleChange} required name="email" id="email" type="email" className="border rounded w-full h-10 px-5" value={friendData.email} />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white w-full h-10 rounded">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddFriend;
