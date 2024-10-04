// React
import { useState } from "react";
import { Outlet } from "react-router-dom";

// UI
import { AppBreadcrumb, Jumbotron, AppButton } from "/src";

// Components
import { AppHeader } from "./header";
import { AppSidebar } from "./sidebar";
import { AppFooter } from "./footer";

export const MainLayout = () => {
  // State
  const [isSidebarVisibile, setSidebarVisibility] = useState(true);

  // @TODO: Static data
  const data = [
    { path: "/", label: "Home" },
    { path: "/sayed", label: "Sayed", outline: true },
    { path: "/hello", label: "Hello", outline: true },
    { path: "/hello/beeb", label: "History" },
    { path: "/page", label: "#", outline: true, danger: true },
  ];

  return (
    <div className="p-2">
      <AppHeader
        isSidebarVisibile={isSidebarVisibile}
        setSidebarVisibility={setSidebarVisibility}
      />

      <AppSidebar
        isSidebarVisibile={isSidebarVisibile}
        setSidebarVisibility={setSidebarVisibility}
      />

      <div className="mt-14 mb-20 space-y-4">
        <AppBreadcrumb />

        <Jumbotron />

        <div className="p-4 border-2 rounded-2xl">
          <div className="flex flex-wrap gap-2 p-2">
            {data.map(({ label, path, ...button }) => (
              <AppButton key={path} label={label} path={path} {...button} />
            ))}
          </div>

          <Outlet />
        </div>
      </div>

      <AppFooter />
    </div>
  );
};
