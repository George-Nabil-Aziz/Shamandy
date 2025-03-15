// React
import { useContext, useEffect } from "react";

// Core
import { AppContext } from "/src";
import { useNavigate } from "react-router-dom";

export const RouterProvider = ({ children }) => {
  // Hooks
  const navigate = useNavigate();

  // Context
  const {
    mainUserSandwichs,
    setMainUserSandwichs,
    usersData,
    setUsersData,
    unitPrice,
    setUnitPrice,
    firebaseDabaseIdName,
    setFirebaseDabaseIdName,
    firebaseUserData,
    setFirebaseUserData,
    firebaseFullUserData,
    setFirebaseFullUserData,
    handleGetUserFullData,
    handleLogout,
  } = useContext(AppContext);

  useEffect(() => {
    navigate("/");
  }, [firebaseUserData, firebaseFullUserData]);

  return children;
};
