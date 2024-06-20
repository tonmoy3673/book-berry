import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const location = useLocation();

  const token = localStorage.getItem("access-token");



  if (loading) {
    return (
      <div className="d-flex mx-auto py-3 text-center">
        <p className="me-2">Loading...</p>{" "}
        <progress className="progress w-56 mt-6 md:mt-10"></progress>
      </div>
    );
  }

  if(!token){
    logOut()
    .then(() =>  <Navigate to='/login' state={{ from: location }} replace />)
    .catch((error) => console.error(error));
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoute;