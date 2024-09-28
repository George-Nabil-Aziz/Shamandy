import { useMatches } from "react-router-dom";

export const useBreadcrumb = () => {
  // Composables
  const matches = useMatches();

  // Routes data exists
  const routes = matches.filter((match) => match.data);

  // Currnet route - last route
  const currentRoute = routes[routes.length - 1];

  return { routes, currentRoute };
};
