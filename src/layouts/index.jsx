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
      className={`${
        isSidebarVisibile ? "lg:pl-64" : "pl-0"
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

      <div className="pt-20 pb-24 px-2 sm:px-4 space-y-3">
        <AppBreadcrumb />

        <Jumbotron />

        <div className="p-2 sm:p-4 border-2 rounded-2xl text-textColor dark:text-darkTextColor">
          <Outlet />
        </div>
      </div>

      {/* Overlay */}
      {isSidebarVisibile && (
        <div
          className="lg:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-20"
          onClick={() => setSidebarVisibility(false)}
        />
      )}

      <AppFooter />
    </div>
  );
};
