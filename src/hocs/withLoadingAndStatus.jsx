// React
import { useEffect, useState } from "react";

export const withLoadingAndStatus = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className={isLoading ? "bg-red-500" : "bg-blue-500"}>
        <WrappedComponent
          status={isLoading ? "Loading..." : "Data Loaded!"}
          {...props}
        />
      </div>
    );
  };
};
