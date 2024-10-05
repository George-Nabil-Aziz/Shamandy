// React
import { Outlet } from "react-router-dom";

// Components
import { Error404Page } from "../pages/404";
import { MainLayout } from "../layouts";
import { MainPage } from "../pages";
import { History } from "../pages/history";

// React Icons
import { HiHome } from "react-icons/hi";
import { GiTurtle } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiSandwich } from "react-icons/gi";
import { BsBackpack2 } from "react-icons/bs";
import { SiHomebridge } from "react-icons/si";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    loader() {
      return {
        bcLabel: "Home",
        bcIcon: HiHome,
        jtTitle: "Hungry ?",
        jtIcon: SiHomebridge,
      };
    },
    children: [
      {
        path: "",
        element: <img className="w-full" src="/fool.png" alt="Fool" />,
      },
      {
        path: "sayed",
        element: <MainPage />,
        loader() {
          return {
            bcLabel: "Sayed",
            bcIcon: BsBackpack2,
            jtTitle: "Here you can pay to sayed 2 pounds for torshy",
            jtIcon: GiTurtle,
          };
        },
      },
      {
        path: "history",
        element: <History />,
        loader() {
          return {
            bcLabel: "History",
            bcIcon: CiDeliveryTruck,
            jtTitle: "Here you can reserve your Bashandy order",
            jtIcon: GiSandwich,
          };
        },
      },
    ],
  },

  // 404 Page
  {
    path: "*",
    element: <Error404Page />,
  },
];
