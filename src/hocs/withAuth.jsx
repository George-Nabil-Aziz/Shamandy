// React
import { useState } from "react";

export const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const toggleAuthentication = () => setAuthenticated((prev) => !prev);

    if (!isAuthenticated) {
      return (
        <div>
          <h2 className="text-xl font-semibold text-red-800">
            Access Denied. Please Log In.
          </h2>

          <button onClick={toggleAuthentication}>Login</button>
        </div>
      );
    }

    return (
      <WrappedComponent
        toggleAuthentication={toggleAuthentication}
        {...props}
      />
    );
  };
};
