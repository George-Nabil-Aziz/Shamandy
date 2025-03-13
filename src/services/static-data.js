// React
import { useContext } from "react";

// Core
import { AppContext } from "/src";

// React icons
import { HiHome } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { GiDonkey } from "react-icons/gi";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

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
  } = useContext(AppContext);

  // TODO: Static data
  const data = [
    { path: "/", label: "Home", icon: HiHome },
    { path: "/sayed", label: "No Sayed", icon: HiUser, encrypted: true },
    // @TODO: Add when needed
    // { path: "/history", label: "History", icon: FaHistory },
    {
      path: "/create",
      label: "Create",
      icon: MdOutlineAddCircle,
      encrypted: true,
    },
    { path: "/edit", label: "Edit", icon: FaEdit, encrypted: true },
    {
      path: "/login",
      label: firebaseUserData?.uid ? "Logout" : "Login",
      icon: FaSignInAlt,
    },
    { path: "/donkey", label: "#", icon: GiDonkey },
  ].filter((singleData) =>
    firebaseUserData?.uid ? singleData : !singleData?.encrypted
  );
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
