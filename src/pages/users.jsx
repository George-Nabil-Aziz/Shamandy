// React
import { useContext, useEffect, useState } from "react";

// Core
import { AppContext, AppButton, db } from "/src";

export const Users = () => {
  // Context
  const {
    firebaseUserData,
    setFirebaseUserData,
    firebaseFullUserData,
    setFirebaseFullUserData,
    handleGetUserFullData,
    firebaseAllUsers,
    setFirebaseAllUsers,
    handleGetAllUsers,
    firebaseAllItems,
    setFirebaseAllItems,
    handleGetAllItems,
    handleLogout,
  } = useContext(AppContext);

  return (
    <div>
      <h1>All users:-</h1>

      <hr />

      {firebaseAllUsers?.map((user) => (
        <div>{user?.displayName}</div>
      ))}
    </div>
  );
};
