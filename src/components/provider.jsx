// React
import { createContext, useEffect, useState } from "react";

// Core
import { auth, db } from "/src";

// Firebase
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Static data
import {
  mainSandwichs,
  PreferencesUser,
  UnitPrice,
  FirebaseDabaseIdName,
} from "../services/static-data";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Firebase
  const auth = getAuth();
  const user = auth.currentUser;

  // State
  const [mainUserSandwichs, setMainUserSandwichs] = useState(mainSandwichs);
  const [usersData, setUsersData] = useState(PreferencesUser);
  const [unitPrice, setUnitPrice] = useState(UnitPrice);
  const [firebaseDabaseIdName, setFirebaseDabaseIdName] =
    useState(FirebaseDabaseIdName);

  const [firebaseUserData, setFirebaseUserData] = useState(auth);
  const [firebaseFullUserData, setFirebaseFullUserData] = useState();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("User logged out successfully.");
    } catch (error) {
      alert("Error logging out:", error.message);
    }
  };

  const handleGetUserFullData = async () => {
    if (user?.uid) {
      const userRef = doc(db, "firebase-users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) setFirebaseFullUserData(userSnap.data());
    }
  };

  useEffect(() => {
    handleGetUserFullData();
  }, [user]);

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
        firebaseFullUserData,
        setFirebaseFullUserData,
        handleGetUserFullData,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
