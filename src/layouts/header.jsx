// React
import { Link, useLocation } from "react-router-dom";

// UI
import { AppButton, StaticData } from "/src";

// Flowbite
import { DarkThemeToggle, Avatar, Dropdown, Navbar } from "flowbite-react";

export const AppHeader = ({ isSidebarVisibile, setSidebarVisibility }) => {
  // TODO: Static data
  const { data } = StaticData();

  // Hook
  const location = useLocation();

  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 right-0 left-0 z-[10] border-b"
    >
      <div className="flex justify-center items-center gap-3">
        <AppButton
          icon={
            isSidebarVisibile
              ? "heroicons:bars-3-center-left-16-solid"
              : "iconamoon:menu-burger-horizontal-fill"
          }
          onClick={() => setSidebarVisibility((prev) => !prev)}
          className="hidden lg:block"
        />
        <Navbar.Brand as={Link} to="/">
          <img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="Ta3mia" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Bashandy
          </span>
        </Navbar.Brand>
      </div>
      <div className="flex md:order-2 gap-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

        <DarkThemeToggle />

        <Navbar.Toggle className="!block lg:!hidden" />
      </div>
      <Navbar.Collapse className="lg:!hidden">
        {data.map(({ label, path, icon }) => (
          <Navbar.Link
            key={path}
            as={Link}
            to={path}
            active={location.pathname === path}
          >
            {label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
