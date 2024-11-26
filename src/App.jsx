// React
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// UI
import { useScreenSize, AppProvider } from "/src";

// Components
import { routes } from "./routes";

// iconify-icon
import "iconify-icon";

export default function App() {
  // Hooks
  const screen = useScreenSize();

  // Router
  const router = createBrowserRouter(routes);

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}
