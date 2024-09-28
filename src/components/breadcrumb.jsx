// Hooks
import { useBreadcrumb } from "../hooks";

// Flowbite
import { Breadcrumb } from "flowbite-react";

// React Icons
import { HiHome } from "react-icons/hi";

export const AppBreadcrumb = () => {
  const { routes } = useBreadcrumb();

  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      {routes.map((route, index) => (
        <Breadcrumb.Item href="#" icon={index === 0 && HiHome} key={route.id}>
          {route.data.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
