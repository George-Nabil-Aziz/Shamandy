// React
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Core
import { AppButton, StaticData, AppContext, useAuthUtils } from "/src";

// Flowbite
import { DarkThemeToggle, Avatar, Dropdown, Navbar } from "flowbite-react";

export const AppHeader = ({ isSidebarVisibile, setSidebarVisibility }) => {
  // TODO: Static data
  const { data } = StaticData();

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

  // Hook
  const location = useLocation();
  const navigate = useNavigate();
  const { handleLogout } = useAuthUtils();

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
          <img src="/medicine.png" className="mr-3 h-6 sm:h-9" alt="Medicine" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Eltabei™
          </span>
        </Navbar.Brand>
      </div>
      <div className="flex md:order-2 gap-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="Logo"
              img={firebaseUserData?.photoURL || "/avatar-male.webp"}
              rounded
            />
          }
        >
          {Object.keys(firebaseUserData || {})?.map(
            (key) =>
              ["displayName", "email"].includes(key) && (
                <Dropdown.Header key={key}>
                  <span className="block truncate text-sm font-medium">
                    {String(firebaseUserData[key])}
                  </span>
                </Dropdown.Header>
              )
          )}

          {!firebaseUserData?.uid && (
            <Dropdown.Item onClick={() => navigate("/login")}>
              Login
            </Dropdown.Item>
          )}

          {firebaseUserData?.uid && (
            <Dropdown.Item onClick={() => navigate("/profile")}>
              Edit profile
            </Dropdown.Item>
          )}

          {firebaseUserData?.uid && (
            <>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  handleLogout();
                  navigate("/");
                }}
                className="!text-red-500 font-black"
              >
                Logout
              </Dropdown.Item>
            </>
          )}
        </Dropdown>

        <DarkThemeToggle />

        <Navbar.Toggle className="!block md:!hidden" />
      </div>
      <Navbar.Collapse className="lg:!hidden">
        {data?.map(({ label, path, icon }) => (
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
