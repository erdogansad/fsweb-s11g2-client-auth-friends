import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((store) => store.user);
  return isLoggedIn ? children : <Redirect push to="/login" />;
};

export default PrivateRoute;
