// React
import { Outlet, useNavigate } from "react-router-dom";

// UI
import { AppBreadcrumb, Jumbotron } from "/src";

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
    { path: "/page1", label: "#", color: "success", outline: true },
    { path: "/page2", label: "#", color: "failure", outline: true },
    { path: "/page3", label: "#", color: "warning", outline: true },
    { path: "/page4", label: "#", color: "purple", outline: true },
  ];

  return (
    <>
      <AppBreadcrumb />
      <Jumbotron />
      <div className="flex flex-wrap gap-2">
        {data.map(({ path, label, color, ...button }) => (
          <Button
            key={path}
            onClick={() => navigate(path)}
            color={color}
            {...button}
          >
            {label}
          </Button>
        ))}
      </div>
      <Button color="purple">Purple</Button>

      <Outlet />
    </>
  );
};
