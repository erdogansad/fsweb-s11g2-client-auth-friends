import { Route, Link, Redirect } from "react-router-dom";

import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchStatus } from "./redux/slices/userSlice";

function App() {
  const { isLoggedIn } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatus());
  }, [dispatch]);

  return (
    <>
      <div className="relative">
        <div className="absolute flex top-5 w-full justify-between px-5 gap-x-10">
          <Link to="/">
            <span className="font-bold text-2xl">Friends Database</span>
          </Link>
          <div className="flex gap-x-5">
            {isLoggedIn ? (
              <>
                <Link to="/friends" className="border px-5 py-2 hover:bg-gray-400">
                  Friend List
                </Link>
                <Link to="/friends/add" className="border px-5 py-2 hover:bg-gray-400">
                  Add Friend
                </Link>
                <Link to="/logout" className="border px-5 py-2 hover:bg-gray-400">
                  Logout
                </Link>
              </>
            ) : (
              <Link to="/login" className="border px-5 py-2 hover:bg-gray-400">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Route exact path="/friends/add">
        <PrivateRoute>
          <AddFriend />
        </PrivateRoute>
      </Route>
      <Route exact path="/friends">
        <PrivateRoute>
          <FriendsList />
        </PrivateRoute>
      </Route>
      <Route exact path="/">
        <PrivateRoute>
          <FriendsList />
        </PrivateRoute>
      </Route>
      <Route path="*">
        <PrivateRoute>
          <FriendsList />
        </PrivateRoute>
      </Route>
    </>
  );
}

export default App;
