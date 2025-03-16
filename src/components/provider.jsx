// React
import { createContext, useEffect, useState } from "react";

// Core
import { auth, db } from "/src";

// Firebase
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { doc, getDoc, setDoc, getDocs, collection } from "firebase/firestore";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Firebase
  const auth = getAuth();
  const user = auth.currentUser;

  // State
  const [firebaseUserData, setFirebaseUserData] = useState(auth);
  const [firebaseFullUserData, setFirebaseFullUserData] = useState();
  const [firebaseAllUsers, setFirebaseAllUsers] = useState();
  const [firebaseAllItems, setFirebaseAllItems] = useState();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("User logged out successfully.");
    } catch (error) {
      alert("Error logging out:", error.message);
    }
  };

  const handleGetAllUsers = async () => {
    const usersCollection = collection(db, "firebase-users");
    const usersSnapshot = await getDocs(usersCollection);
    setFirebaseAllUsers(
      usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  };
  const handleGetAllItems = async () => {
    const usersCollection = collection(db, "firebase-items");
    const usersSnapshot = await getDocs(usersCollection);
    setFirebaseAllItems(
      usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  };

  const handleGetUserFullData = async () => {
    if (user?.uid) {
      const userRef = doc(db, "firebase-users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) setFirebaseFullUserData(userSnap.data());
    }
  };

  useEffect(() => {
    if (firebaseUserData?.uid) {
      handleGetAllUsers();
      handleGetAllItems();
    }
  }, [firebaseUserData?.uid]);

  useEffect(() => {
    handleGetUserFullData();
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("onAuthStateChanged");
      setFirebaseUserData(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <AppContext.Provider
      value={{
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
