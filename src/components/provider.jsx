// React
import { createContext, useEffect, useState } from "react";

// Core
import { auth } from "/src";

// Firebase
import { onAuthStateChanged, signOut } from "firebase/auth";

// Static data
import {
  mainSandwichs,
  PreferencesUser,
  UnitPrice,
  FirebaseDabaseIdName,
} from "../services/static-data";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [mainUserSandwichs, setMainUserSandwichs] = useState(mainSandwichs);
  const [usersData, setUsersData] = useState(PreferencesUser);
  const [unitPrice, setUnitPrice] = useState(UnitPrice);
  const [firebaseDabaseIdName, setFirebaseDabaseIdName] =
    useState(FirebaseDabaseIdName);
  const [firebaseUserData, setFirebaseUserData] = useState(auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("User logged out successfully.");
    } catch (error) {
      console.log(error);
      alert("Error logging out:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setFirebaseUserData(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <AppContext.Provider
      value={{
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
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
