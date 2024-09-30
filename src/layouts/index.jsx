// React
import { Outlet } from "react-router-dom";

// UI
import { AppBreadcrumb } from "/src";

export const MainLayout = () => {
  return (
    <>
      <AppBreadcrumb />
      <Outlet />
    </>
  );
};
