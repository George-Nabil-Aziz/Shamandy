// React
import { Outlet, useNavigate } from "react-router-dom";

// UI
import { AppBreadcrumb } from "/src";

// Flowbite
import { Button } from "flowbite-react";

export const MainLayout = () => {
  // Hooks
  const navigate = useNavigate();

  const data = [
    { path: "/", label: "Home", color: "blue", pill: true },
    { path: "/sayed", label: "Sayed", color: "gray", pill: true },
    { path: "/hello", label: "Hello", color: "dark" },
    { path: "/hello/beeb", label: "Beeb", color: "light" },
    { path: "/", label: "#", color: "success", outline: true },
    { path: "/", label: "#", color: "failure", outline: true },
    { path: "/", label: "#", color: "warning", outline: true },
    { path: "/", label: "#", color: "purple", outline: true },
  ];

  return (
    <>
      <AppBreadcrumb />
      <div className="flex flex-wrap gap-2">
        {data.map(({ path, label, color, ...button }) => (
          <Button onClick={() => navigate(path)} color={color} {...button}>
            {label}
          </Button>
        ))}
      </div>
      <Button color="purple">Purple</Button>

      <Outlet />
    </>
  );
};
