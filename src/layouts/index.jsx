// React
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// UI
import { AppBreadcrumb, Jumbotron, AppButton } from "/src";

// Components
import { AppHeader } from "./header";
import { AppSidebar } from "./sidebar";
import { AppFooter } from "./footer";
import { useScreenSize } from "../hooks";

export const MainLayout = () => {
  // Hooks
  const screen = useScreenSize();

  // State
  const [isSidebarVisibile, setSidebarVisibility] = useState(true);

  useEffect(() => {
    if (screen.lte.md()) setSidebarVisibility(false);
    else setSidebarVisibility(true);
  }, [screen.size]);

  return (
    <div
      className={`pt-16 pb-24 ${
        isSidebarVisibile ? "pl-64" : "pl-0"
      } bg-backgroundColor dark:bg-darkBackgroundColor transition-all h-screen overflow-y-auto`}
    >
      <AppHeader
        isSidebarVisibile={isSidebarVisibile}
        setSidebarVisibility={setSidebarVisibility}
      />

      <AppSidebar
        isSidebarVisibile={isSidebarVisibile}
        setSidebarVisibility={setSidebarVisibility}
      />

      <div className="pt-4 px-4 space-y-4">
        <AppBreadcrumb />

        <Jumbotron />

        <div className="p-4 border-2 rounded-2xl overflow-auto">
          <Outlet />
        </div>
      </div>

      <AppFooter />
    </div>
  );
};
