// React icons
import { HiChartPie, HiUser } from "react-icons/hi";
import { GiDonkey } from "react-icons/gi";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

export const StaticData = () => {
  // TODO: Static data
  const data = [
    { path: "/", label: "Home", icon: HiChartPie },
    { path: "/sayed", label: "Sayed", icon: HiUser },
    // @TODO: Add when needed
    // { path: "/history", label: "History", icon: FaHistory },
    { path: "/create", label: "Create", icon: MdOutlineAddCircle },
    { path: "/donkey", label: "#", icon: GiDonkey },
  ];
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
