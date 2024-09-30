// Components
import { Outlet } from "react-router-dom";
import { MainLayout } from "../layouts";
import { MainPage } from "../pages";

// React Icons
import { HiHome } from "react-icons/hi";
import { GiTurtle } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    loader() {
      return {
        bcLabel: "MainLayout",
        bcIcon: HiHome,
      };
    },
    children: [
      {
        path: "",
        element: <MainPage />,
        loader() {
          return {
            bcLabel: "MainPage",
            bcIcon: GiTurtle,
          };
        },
      },
      {
        path: "hello",
        element: (
          <div>
            Hello
            <Outlet />
          </div>
        ),
        loader() {
          return {
            bcLabel: "Helloooo",
            bcIcon: GiTurtle,
          };
        },
        children: [
          {
            path: "beeb",
            element: <div>Beeb</div>,
            loader() {
              return {
                bcLabel: "Beeb",
                bcIcon: CiDeliveryTruck,
              };
            },
          },
        ],
      },
    ],
  },
];
