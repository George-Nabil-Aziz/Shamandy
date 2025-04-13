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
import { FaUsers, FaBook, FaBookBookmark } from "react-icons/fa6";

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
  } = useContext(AppContext);

  // TODO: Static data
  const data = [
    { path: "/", label: "Home", icon: HiHome, role: [0, 1, 2, 3] },
    {
      path: "/order",
      label: "Order",
      icon: HiUser,
      encrypted: true,
      role: [1, 2, 3],
    },
    {
      path: "/receipt",
      label: "Receipt",
      icon: IoReceiptSharp,
      encrypted: true,
      role: [2, 3],
    },
    {
      path: "/create",
      label: "Create",
      icon: MdOutlineAddCircle,
      encrypted: true,
      role: [2, 3],
    },
    {
      path: "/edit",
      label: "Edit",
      icon: FaEdit,
      encrypted: true,
      role: [2, 3],
    },
    {
      path: "/login",
      label: firebaseUserData?.uid ? "Logout" : "Login",
      icon: FaSignInAlt,
      role: [0, 1, 2, 3],
    },
    {
      path: "/profile",
      label: "My Profile",
      icon: FaUserCircle,
      encrypted: true,
      role: [1, 2, 3],
    },
    {
      path: "/users",
      label: "Edit Users",
      icon: FaUsers,
      encrypted: true,
      role: [2, 3],
    },
    { path: "/donkey", label: "#", icon: GiDonkey, role: [0, 1, 2, 3] },

    { path: "/history", label: "History", icon: FaHistory, role: [3] },
    {
      path: "/upload-photo",
      label: "Photo",
      icon: BsImage,
      role: [3],
    },
    {
      path: "/studio",
      label: "Studio",
      icon: FaBook,
      role: [3],
    },
    {
      path: "/studio-two",
      label: "Studio Two",
      icon: FaBookBookmark,
      role: [3],
    },
    {
      path: "/studio-three",
      label: "Studio Three",
      icon: FaBookBookmark,
      role: [3],
    },
    {
      path: "/studio-four",
      label: "Studio Four",
      icon: FaBookBookmark,
      role: [3],
    },
  ].filter((singleData) => {
    if (firebaseUserData?.uid)
      return singleData?.role?.includes(+firebaseFullUserData?.role);
    else return singleData?.role?.includes(0);
  });
  return { data };
};

/*
  0: Guest
  1: User
  2: Admin
  3: Super Admin
*/
