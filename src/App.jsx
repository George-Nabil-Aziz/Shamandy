// React
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// UI
import { useScreenSize } from "/src";

// Components
import { routes } from "./routes";

export default function App() {
  // Hooks
  const screen = useScreenSize();

  // Router
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
