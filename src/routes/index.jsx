// React Icons
import { HiChartPie } from "react-icons/hi";
import { GiTurtle } from "react-icons/gi";
import { CiDeliveryTruck, CiLogin } from "react-icons/ci";
import { GiSandwich } from "react-icons/gi";
import { BsBackpack2 } from "react-icons/bs";
import { SiHomebridge } from "react-icons/si";
import {
  MdOutlineAddComment,
  MdOutlineAdd,
  MdEditSquare,
} from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { FaUserMd, FaImage } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { MdMonochromePhotos } from "react-icons/md";

// Components
import { Error404Page } from "../pages/404";
import { RouterProvider } from "./router-provider";
import { MainLayout } from "../layouts";
import { MainPage } from "../pages";
import { OrderPage } from "../pages/order-table";
import { History } from "../pages/history";
import { Create } from "../pages/create";
import { Edit } from "../pages/edit";
import { Login } from "../pages/login";
import { Profile } from "../pages/profile";
import { UploadPhoto } from "../pages/upload-photo";

export const routes = [
  {
    path: "/",
    element: (
      <RouterProvider>
        <MainLayout />
      </RouterProvider>
    ),
    loader() {
      return {
        bcLabel: "Home",
        bcIcon: HiChartPie,
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
            jtTitle: "Here you can't pay to sayed 2 pounds for torshy",
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
            jtTitle: "Here you can reserve your Gad order",
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
            jtTitle: "Here you can add more columns to table",
            jtIcon: MdOutlineAddComment,
          };
        },
      },
      {
        path: "edit",
        element: <Edit />,
        loader() {
          return {
            bcLabel: "Edit",
            bcIcon: RiEdit2Fill,
            jtTitle: "Here you can edit food",
            jtIcon: MdEditSquare,
          };
        },
      },
      {
        path: "login",
        element: <Login />,
        loader() {
          return {
            bcLabel: "Auth",
            bcIcon: CiLogin,
            jtTitle: "Here you can auth",
            jtIcon: FiLogIn,
          };
        },
      },
      {
        path: "profile",
        element: <Profile />,
        loader() {
          return {
            bcLabel: "Edit profile",
            bcIcon: FaUserMd,
            jtTitle: "Here you can edit your profile data",
            jtIcon: FaUserGear,
          };
        },
      },
      {
        path: "Upload-photo",
        element: <UploadPhoto />,
        loader() {
          return {
            bcLabel: "Upload photo",
            bcIcon: FaImage,
            jtTitle: "Here you can Upload photo",
            jtIcon: MdMonochromePhotos,
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
