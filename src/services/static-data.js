// React icons
import { HiChartPie, HiUser } from "react-icons/hi";
import { GiDonkey } from "react-icons/gi";
import { FaHistory } from "react-icons/fa";

export const StaticData = () => {
  // TODO: Static data
  const data = [
    { path: "/", label: "Home", icon: HiChartPie },
    { path: "/sayed", label: "Sayed", icon: HiUser },
    // @TODO: Add when needed
    // { path: "/history", label: "History", icon: FaHistory },
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

export const PreferencesUser2 = {
  Pappy: { fool: 2, ta3mia: 0, batates: 2 },
  Mummy: { fool: 0, ta3mia: 2, batates: 2 },
  Pero: { fool: 1, ta3mia: 1, batates: 2 },
  Devo: { fool: 0, ta3mia: 2, batates: 2 },
  BoBool: { fool: 2, ta3mia: 1, batates: 0 },
  Smsm: { fool: 0, ta3mia: 2, batates: 0 },
  Gogo: { fool: 2, ta3mia: 1, batates: 0 },
};

export const UnitPrice = {
  fool: 8,
  ta3mia: 8,
  batates: 12,
};
