// React
import { Outlet } from "react-router-dom";

// UI
import { AppBreadcrumb } from "../components/breadcrumb";

export const MainLayout = () => {
  return (
    <>
      <AppBreadcrumb />
      <Outlet />
    </>
  );
};
