// React
import { Outlet } from "react-router-dom";

// UI
import { AppBreadcrumb, Jumbotron, Button } from "/src";

export const MainLayout = () => {
  const data = [
    { path: "/", label: "Home", color: "blue" },
    { path: "/sayed", label: "Sayed", color: "dark" },
    { path: "/hello", label: "Hello", color: "success" },
    { path: "/hello/beeb", label: "History", color: "failure" },
    { path: "/page1", label: "#", color: "warning", pill: true },
    { path: "/page2", label: "#", color: "purple", pill: true },
  ];

  return (
    <div className="p-2">
      <AppBreadcrumb />
      <Jumbotron />
      <div className="flex flex-wrap gap-2">
        {data.map(({ label, path, ...button }) => (
          <Button label={label} path={path} {...button} />
        ))}
      </div>

      <Outlet />
    </div>
  );
};
