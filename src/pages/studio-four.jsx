// Core
import { withAuth } from "/src";

export const StudioFourePage = withAuth(({ toggleAuthentication }) => {
  return (
    <div>
      <p>Welcome to dashboard</p>

      <button onClick={toggleAuthentication}>Logout</button>
    </div>
  );
});
