// React icons
import {
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

export const StaticData = () => {
  // TODO: Static data
  const data = [
    { path: "/", label: "Home", icon: HiChartPie },
    { path: "/sayed", label: "Sayed", icon: HiInbox },
    { path: "/hello", label: "Hello", icon: HiUser },
    { path: "/hello/beeb", label: "History", icon: HiShoppingBag },
    { path: "/page", label: "#", icon: HiTable },
  ];
  return { data };
};