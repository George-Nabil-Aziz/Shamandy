// React
import { useContext } from "react";

// Core
import { AppContext } from "/src";

// React icons
import { HiHome } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { GiDonkey } from "react-icons/gi";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaHistory, FaEdit, FaSignInAlt, FaUserCircle } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import { IoReceiptSharp } from "react-icons/io5";

export const StaticData = () => {
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

  // TODO: Static data
  const data = [
    { path: "/", label: "Home", icon: HiHome, role: [0, 1, 2] },
    {
      path: "/order",
      label: "Order",
      icon: HiUser,
      encrypted: true,
      role: [1, 2],
    },
    {
      path: "/receipt",
      label: "Receipt",
      icon: IoReceiptSharp,
      encrypted: true,
      role: [1],
    },
    // @TODO: Add when needed
    // { path: "/history", label: "History", icon: FaHistory, role: [0, 1, 2] },
    {
      path: "/create",
      label: "Create",
      icon: MdOutlineAddCircle,
      encrypted: true,
      role: [1],
    },
    { path: "/edit", label: "Edit", icon: FaEdit, encrypted: true, role: [1] },
    {
      path: "/login",
      label: firebaseUserData?.uid ? "Logout" : "Login",
      icon: FaSignInAlt,
      role: [0, 1, 2],
    },
    {
      path: "/profile",
      label: "My Profile",
      icon: FaUserCircle,
      encrypted: true,
      role: [1, 2],
    },
    /* TODO: Add when study */
    // {
    //   path: "/upload-photo",
    //   label: "Photo",
    //   icon: BsImage,
    //   role: [0, 1, 2],
    // },
    { path: "/donkey", label: "#", icon: GiDonkey, role: [0, 1, 2] },
  ].filter((singleData) => {
    if (firebaseUserData?.uid) {
      if (+firebaseFullUserData?.role !== 1)
        return singleData?.role?.includes(2);
      else return singleData;
    } else return singleData?.role?.includes(0);
  });
  return { data };
};
