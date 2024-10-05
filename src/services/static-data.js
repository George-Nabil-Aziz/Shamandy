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

export const PreferencesUser = [
  { name: "Pero", fool: 2, ta3mia: 3, batates: 7 },
  { name: "Devo", fool: 2, ta3mia: 3, batates: 7 },
  { name: "Mummy", fool: 2, ta3mia: 3, batates: 7 },
  { name: "Pappy", fool: 2, ta3mia: 3, batates: 7 },
  { name: "BoBool", fool: 2, ta3mia: 3, batates: 7 },
  { name: "Smsm", fool: 2, ta3mia: 3, batates: 7 },
  { name: "Gogo", fool: 2, ta3mia: 3, batates: 7 },
];
