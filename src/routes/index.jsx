// Components
import { Outlet } from "react-router-dom";
import { MainLayout } from "../layouts";
import { MainPage } from "../pages";

// React Icons
import { HiHome } from "react-icons/hi";
import { GiTurtle } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiSandwich } from "react-icons/gi";
import { BsBackpack2 } from "react-icons/bs";
import { SiHomebridge } from "react-icons/si";
import { History } from "../pages/history";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    loader() {
      return {
        bcLabel: "Home",
        bcIcon: HiHome,
        jtTitle: "Here you can't do anything here",
        jtIcon: SiHomebridge,
      };
    },
    children: [
      {
        path: "sayed",
        element: <MainPage />,
        loader() {
          return {
            bcLabel: "SayedPage",
            bcIcon: GiTurtle,
            jtTitle: "Here you can pay to sayed 2 pounds for torshy",
            jtIcon: BsBackpack2,
          };
        },
      },
      {
        path: "hello",
        element: <Outlet />,
        loader() {
          return {
            bcLabel: "Helloooo",
            bcIcon: GiTurtle,
            jtTitle: "Here you can say hello to others",
            jtIcon: GiTurtle,
          };
        },
        children: [
          {
            path: "beeb",
            element: <History />,
            loader() {
              return {
                bcLabel: "Beeb",
                bcIcon: CiDeliveryTruck,
                jtTitle: "Here you can reserve your Bashandy order",
                jtIcon: GiSandwich,
              };
            },
          },
        ],
      },
    ],
  },

  // 404 Page
  {
    path: "*",
    element: "You donkey",
  },
];
