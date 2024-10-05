// React icons
import { HiChartPie, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

export const StaticData = () => {
  // TODO: Static data
  const data = [
    { path: "/", label: "Home", icon: HiChartPie },
    { path: "/sayed", label: "Sayed", icon: HiUser },
    { path: "/history", label: "History", icon: HiShoppingBag },
    { path: "/page", label: "#", icon: HiTable },
  ];
  return { data };
};
