import { useMatches, useNavigate } from "react-router-dom";

export const useBreadcrumb = () => {
  // Composables
  const matches = useMatches();
  const navigate = useNavigate();

  // Routes data exists
  const routes = matches.filter((match) => match.data);

  // Currnet route - last route
  const currentRoute = routes[routes.length - 1];

  //
  const handleRouteClick = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  return { routes, currentRoute, handleRouteClick };
};
