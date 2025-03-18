// React
import { createContext, useEffect, useState } from "react";

// Core
import { auth, db, AppToast, ConfirmDialog } from "/src";

// Firebase
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { doc, getDoc, setDoc, getDocs, collection } from "firebase/firestore";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Firebase
  const auth = getAuth();
  const user = auth.currentUser;

  // State Firebase
  const [firebaseUserData, setFirebaseUserData] = useState(auth || {});
  const [firebaseFullUserData, setFirebaseFullUserData] = useState();
  const [firebaseAllUsers, setFirebaseAllUsers] = useState();
  const [firebaseAllItems, setFirebaseAllItems] = useState();

  // State notifications
  const [isToastVisible, setToastVisible] = useState(false);
  const [isConfirmDialogVisible, setConfirmDialogVisible] = useState(false);

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
      // console.log("onAuthStateChanged"); // End sprints/3
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

        isToastVisible,
        setToastVisible,
        isConfirmDialogVisible,
        setConfirmDialogVisible,
      }}
    >
      {/* Handle Notifications */}
      {isToastVisible && (
        <AppToast
          isToastVisible={isToastVisible}
          onClose={() => setToastVisible(false)}
        />
      )}

      {/* Confirm Dialog */}
      {isConfirmDialogVisible && (
        <ConfirmDialog
          isConfirmDialogVisible={isConfirmDialogVisible}
          onClose={() => setConfirmDialogVisible(false)}
        />
      )}

      {children}
    </AppContext.Provider>
  );
};
