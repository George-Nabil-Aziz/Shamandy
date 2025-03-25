// React
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

// UI
import { StaticData, AppContext } from "/src";

// Flowbite
import { Sidebar } from "flowbite-react";

export const AppSidebar = ({ isSidebarVisibile, setSidebarVisibility }) => {
  // TODO: Static data
  const { data } = StaticData();

  // Hook
  const location = useLocation();

  // Context
  const {
    firebaseUserData,
    setFirebaseUserData,
    firebaseFullUserData,
    setFirebaseFullUserData,
    handleGetUserFullData,
    firebaseAllUsers,
    setFirebaseAllUsers,
    handleGetAllUsers,
    firebaseAllItems,
    setFirebaseAllItems,
    handleGetAllItems,
  } = useContext(AppContext);

  return (
    <Sidebar
      aria-label="Sidebar with logo branding example"
      className={`fixed left-0 ${
        !isSidebarVisibile && "-translate-x-full"
      } transition-all`}
    >
      <Sidebar.Items className="mb-20">
        <Sidebar.ItemGroup>
          {data?.map(({ label, path, icon, role }) => (
            <Sidebar.Item
              key={path}
              as={Link}
              to={path}
              icon={icon}
              active={location.pathname === path}
            >
              {label} {role?.length === 1 && role?.includes(1) && "✨"}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
