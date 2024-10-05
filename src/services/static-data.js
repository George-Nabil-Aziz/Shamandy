// React icons
import { HiChartPie, HiUser } from "react-icons/hi";
import { GiDonkey } from "react-icons/gi";
import { FaHistory } from "react-icons/fa";

export const StaticData = () => {
  // TODO: Static data
  const data = [
    { path: "/", label: "Home", icon: HiChartPie },
    { path: "/sayed", label: "Sayed", icon: HiUser },
    { path: "/history", label: "History", icon: FaHistory },
    { path: "/donkey", label: "#", icon: GiDonkey },
  ];
  return { data };
};
