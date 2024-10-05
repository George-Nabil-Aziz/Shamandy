// React icons
import { HiChartPie, HiShoppingBag, HiUser } from "react-icons/hi";
import { GiDonkey } from "react-icons/gi";

export const StaticData = () => {
  // TODO: Static data
  const data = [
    { path: "/", label: "Home", icon: HiChartPie },
    { path: "/sayed", label: "Sayed", icon: HiUser },
    { path: "/history", label: "History", icon: HiShoppingBag },
    { path: "/donkey", label: "#", icon: GiDonkey },
  ];
  return { data };
};
