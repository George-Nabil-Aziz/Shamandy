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

export const PreferencesUser = {
  pappy: {
    fool: 0,
    ta3mia: 0,
    batates: 0,
    koshary: 0,
    tagen: 0,
  },
  mummy: {
    fool: 0,
    ta3mia: 0,
    batates: 0,
    koshary: 0,
    tagen: 0,
  },
  batbat: {
    fool: 0,
    ta3mia: 0,
    batates: 0,
    koshary: 0,
    tagen: 0,
  },
  davdav: {
    fool: 0,
    ta3mia: 0,
    batates: 0,
    koshary: 0,
    tagen: 0,
  },
  davdav: {
    fool: 0,
    ta3mia: 0,
    batates: 0,
    koshary: 0,
    tagen: 0,
  },
  smsm: {
    fool: 0,
    ta3mia: 0,
    batates: 0,
    koshary: 0,
    tagen: 0,
  },
  gogo: {
    fool: 0,
    ta3mia: 0,
    batates: 0,
    koshary: 0,
    tagen: 0,
  },
};

export const UnitPrice = {
  fool: 8,
  ta3mia: 8,
  batates: 12,
  koshary: 25,
  tagen: 0,
};
