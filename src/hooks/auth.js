// Core
import { auth, useNotify } from "/src";

// Firebase
import { signOut } from "firebase/auth";

export const useAuthUtils = () => {
  // Hooks
  const { notify } = useNotify();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      notify("User logged out successfully.");
    } catch (error) {
      notify.error("Error logging out:", error.message);
    }
  };

  return { handleLogout };
};
