// Hooks
import { useBreadcrumb } from "/src";

// Flowbite
import { Breadcrumb } from "flowbite-react";

export const AppBreadcrumb = () => {
  const { routes, handleRouteClick } = useBreadcrumb();

  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      {routes.map((route) => (
        <Breadcrumb.Item
          href="#"
          key={route.id}
          icon={route.data.bcIcon}
          onClick={(event) => handleRouteClick(event, route.pathname)}
        >
          {route.data.bcLabel}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
