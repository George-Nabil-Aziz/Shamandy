// React
import { useContext } from "react";

// Core
import { AppContext } from "/src";

export const useNotify = () => {
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

    isToastVisible,
    setToastVisible,
  } = useContext(AppContext);

  const notify = (message) => setToastVisible({ message, type: 1 });
  notify.warning = (message) => setToastVisible({ message, type: 2 });
  notify.error = (message) => setToastVisible({ message, type: 3 });

  return { notify };
};
