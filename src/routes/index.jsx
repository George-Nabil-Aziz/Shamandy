// Components
import { MainLayout } from "../layouts";
import { MainPage } from "../pages";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    loader() {
      return {
        label: "Outer",
      };
    },
    children: [
      {
        path: "",
        element: <MainPage />,
        loader() {
          return {
            label: "Main Home",
          };
        },
      },
      {
        path: "hello",
        element: <div>Hello</div>,
        loader() {
          return {
            label: "Helloooo",
          };
        },
      },
    ],
  },
];
