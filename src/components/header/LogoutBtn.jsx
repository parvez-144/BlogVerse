import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      localStorage.removeItem("accessToken");
      dispatch(logout());
    });
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full text-blue-600 font-semibold border border-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
