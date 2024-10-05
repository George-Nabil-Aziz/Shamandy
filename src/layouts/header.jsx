// React
import { Link } from "react-router-dom";

// UI
import { AppButton, StaticData } from "/src";

// Flowbite
import { DarkThemeToggle, Avatar, Dropdown, Navbar } from "flowbite-react";

export const AppHeader = ({ isSidebarVisibile, setSidebarVisibility }) => {
  // TODO: Static data
  const { data } = StaticData();

  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 right-0 left-0 z-[10] border-b"
    >
      <Navbar.Brand as={Link} to="/">
        <AppButton
          outline
          icon="iconamoon:menu-burger-horizontal-fill"
          onClick={() => setSidebarVisibility((prev) => !prev)}
        />
        <img src="/favicon.png" className="mx-3 h-6 sm:h-9" alt="Ta3mia" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Bashandy
        </span>
      </Navbar.Brand>
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

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {data.map(({ label, path, icon, ...button }) => (
          <Navbar.Link key={path} as={Link} to={path}>
            {label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
