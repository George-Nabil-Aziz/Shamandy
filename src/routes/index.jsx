// React Icons
import { HiHome } from "react-icons/hi";
import { GiTurtle } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiSandwich } from "react-icons/gi";
import { BsBackpack2 } from "react-icons/bs";
import { SiHomebridge } from "react-icons/si";
import { MdOutlineAddComment, MdOutlineAdd } from "react-icons/md";

// Components
import { Error404Page } from "../pages/404";
import { MainLayout } from "../layouts";
import { MainPage } from "../pages";
import { OrderPage } from "../pages/order-table";
import { History } from "../pages/history";
import { Create } from "../pages/create";

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
        element: <MainPage />,
      },
      {
        path: "sayed",
        element: <OrderPage />,
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
            jtTitle: "Here you can reserve your Shamandy order",
            jtIcon: GiSandwich,
          };
        },
      },
      {
        path: "create",
        element: <Create />,
        loader() {
          return {
            bcLabel: "Create",
            bcIcon: MdOutlineAdd,
            jtTitle: "Here you can more columns to table",
            jtIcon: MdOutlineAddComment,
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
