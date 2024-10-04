// React
import { Outlet } from "react-router-dom";

// UI
import { AppBreadcrumb, Jumbotron, Button } from "/src";

export const MainLayout = () => {
  const data = [
    { path: "/", label: "Home" },
    { path: "/sayed", label: "Sayed", outline: true },
    { path: "/hello", label: "Hello", outline: true },
    { path: "/hello/beeb", label: "History" },
    { path: "/page", label: "#", outline: true },
  ];

  return (
    <div className="p-2">
      <AppBreadcrumb />
      <Jumbotron />
      <div className="flex flex-wrap gap-2 p-2">
        {data.map(({ label, path, ...button }) => (
          <Button label={label} path={path} {...button} />
        ))}
      </div>

      <Outlet />
    </div>
  );
};
