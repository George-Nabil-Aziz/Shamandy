// React
import { Link } from "react-router-dom";

// UI
import { StaticData } from "/src";

// Flowbite
import { Sidebar } from "flowbite-react";

export const AppSidebar = ({ isSidebarVisibile, setSidebarVisibility }) => {
  // TODO: Static data
  const { data } = StaticData();

  return (
    <Sidebar
      aria-label="Sidebar with logo branding example"
      className={`fixed top-0 left-0 mt-14 ${
        !isSidebarVisibile && "-translate-x-full"
      } transition-all`}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {data.map(({ label, path, icon }) => (
            <Sidebar.Item key={path} as={Link} to={path} icon={icon}>
              {label}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
