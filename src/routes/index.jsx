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
import { FaUserGear, FaUserSecret, FaBookAtlas } from "react-icons/fa6";
import { MdMonochromePhotos } from "react-icons/md";
import { MdOutlineReceipt } from "react-icons/md";
import { TfiReceipt } from "react-icons/tfi";
import { ImUsers } from "react-icons/im";
import { IoBook } from "react-icons/io5";

// Components
import { Error404Page } from "../pages/404";
import { RouterProvider } from "./router-provider";
import { MainLayout } from "../layouts";
import { MainPage } from "../pages";
import { Receipt } from "../pages/receipt";
import { MyOrderPage } from "../pages/my-order";
import { History } from "../pages/history";
import { Create } from "../pages/create";
import { Edit } from "../pages/edit";
import { Login } from "../pages/login";
import { Profile } from "../pages/profile";
import { Users } from "../pages/users";
import { UploadPhoto } from "../pages/upload-photo";
import { StudioPage } from "../pages/studio";
import { StudioTwoPage } from "../pages/studio-two";
import { StudioThreePage } from "../pages/studio-three";
import { StudioFourPage } from "../pages/studio-four";

export const routes = [
  {
    path: "/",
    element: (
      // <RouterProvider>
      <MainLayout />
      // </RouterProvider>
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
        path: "receipt",
        element: <Receipt />,
        loader() {
          return {
            bcLabel: "Receipt",
            bcIcon: MdOutlineReceipt,
            jtTitle: "Here you can't pay to sayed 2 pounds for torshy",
            jtIcon: TfiReceipt,
          };
        },
      },
      {
        path: "order",
        element: <MyOrderPage />,
        loader() {
          return {
            bcLabel: "Order",
            bcIcon: BsBackpack2,
            jtTitle: "Here you can't pay to sayed 2 pounds for torshy",
            jtIcon: GiTurtle,
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
        path: "users",
        element: <Users />,
        loader() {
          return {
            bcLabel: "Edit users",
            bcIcon: ImUsers,
            jtTitle: "Here you can edit all users",
            jtIcon: FaUserSecret,
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
            jtTitle: "Here you can reserve your Eltabei order",
            jtIcon: GiSandwich,
          };
        },
      },
      {
        path: "upload-photo",
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
      {
        path: "studio",
        element: <StudioPage />,
        loader() {
          return {
            bcLabel: "Studio",
            bcIcon: IoBook,
            jtTitle: "Here you can study: Confirm dialog, Notify, useImmer",
            jtIcon: FaBookAtlas,
          };
        },
      },
      {
        path: "studio-two",
        element: <StudioTwoPage />,
        loader() {
          return {
            bcLabel: "Studio Two",
            bcIcon: IoBook,
            jtTitle: "Here you can study: Simple HOC",
            jtIcon: FaBookAtlas,
          };
        },
      },
      {
        path: "studio-three",
        element: <StudioThreePage />,
        loader() {
          return {
            bcLabel: "Studio Three",
            bcIcon: IoBook,
            jtTitle: "Here you can study three",
            jtIcon: FaBookAtlas,
          };
        },
      },
      {
        path: "studio-four",
        element: <StudioFourPage />,
        loader() {
          return {
            bcLabel: "Studio Four",
            bcIcon: IoBook,
            jtTitle: "Here you can study four",
            jtIcon: FaBookAtlas,
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
