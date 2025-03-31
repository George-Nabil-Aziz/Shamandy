// Core
import { withLoadingAndStatus } from "/src";

export const StudioTwoPage = () => {
  const MyComponent = withLoadingAndStatus(({ status }) => <h2>{status}</h2>);
  return <MyComponent />;
};
