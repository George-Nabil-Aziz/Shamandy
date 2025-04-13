// Core
import { withAuth } from "/src";

export const StudioThreePage = withAuth(({ toggleAuthentication }) => {
  return (
    <div>
      <p className="text-xl text-cyan-900 font-black">Welcome to dashboard</p>

      <button onClick={toggleAuthentication}>Logout</button>
    </div>
  );
});
