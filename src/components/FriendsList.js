import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../endpoint/api";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((resp) => {
        setFriends(resp.data);
      });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-fit h-fit border rounded p-10">
        {friends.map((friend, id) => (
          <div key={id} className="flex gap-x-3">
            <span>{friend.name}</span>
            <span>|</span>
            <span>{friend.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
