// Core
import { auth, db, useNotify } from "/src";

// Firebase
import { signOut, deleteUser } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";

export const useAuthUtils = () => {
  // Constant
  const user = auth.currentUser;

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

  const handleDeleteUser = async () => {
    try {
      await deleteUser(user);
      await deleteDoc(doc(db, "firebase-users", user?.uid));
      notify("User deleted successfully");
    } catch (error) {
      console.log(error);
      notify.error("Error deleting user or their data:", error);
    }
  };

  return { handleLogout, handleDeleteUser };
};
