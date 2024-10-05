// UI
import { AppButton } from "/src";

export const Error404Page = () => {
  return (
    <div className="h-screen bg-[url('/donkey.png')] bg-no-repeat bg-center bg-gray-500">
      <AppButton label="Go home you donkey" path="/" danger />
    </div>
  );
};
