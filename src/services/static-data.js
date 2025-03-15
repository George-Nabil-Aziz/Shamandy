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

export const StaticData = () => {
  // Context
  const {
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
  } = useContext(AppContext);

  // TODO: Static data
  const data = [
    { path: "/", label: "Home", icon: HiHome, role: [0, 1, 2] },
    {
      path: "/sayed",
      label: "No Sayed",
      icon: HiUser,
      encrypted: true,
      role: [1, 2],
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

export const mainSandwichs = {
  fool: 0,
  ta3mia: 0,
  batates: 0,
  koshary: 0,
};

export const PreferencesUser = {
  pappy: mainSandwichs,
  mummy: mainSandwichs,
  batbat: mainSandwichs,
  davdav: mainSandwichs,
  boobol: mainSandwichs,
  smsm: mainSandwichs,
  gogo: mainSandwichs,
};

export const UnitPrice = {
  fool: 8,
  ta3mia: 8,
  batates: 12,
  koshary: 25,
};

export const FirebaseDabaseIdName = {
  order: {
    collection: "shamandy-order",
    id: "order-static-id",
  },
  unitPrice: {
    collection: "shamandy-unit-price",
    id: "unit-price-static-id",
  },
};
