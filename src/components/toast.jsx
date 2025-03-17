// React
import { useEffect } from "react";

// Flowbite
import { Toast } from "flowbite-react";

// Core
import { Icon } from "/src";

// React icons
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";

export const AppToast = ({ isToastVisible = {}, onClose }) => {
  const getData = () => {
    if (isToastVisible?.type === 2)
      return {
        className:
          "bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200",
        icon: "material-symbols:warning-outline-rounded",
        reactIcons: HiExclamation,
        message: isToastVisible?.message || "Warning",
      };
    else if (isToastVisible?.type === 3)
      return {
        className: "bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200",
        icon: "material-symbols:error-circle-rounded-outline-sharp",
        reactIcons: HiX,
        message: isToastVisible?.message || "Error",
      };
    return {
      className:
        "bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200",
      icon: "material-symbols:check-circle-outline",
      reactIcons: HiCheck,
      message: isToastVisible?.message || "Sucess",
    };
  };

  const ReactIcon = getData()?.reactIcons;

  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 3000);
  }, []);

  return (
    <Toast className="fixed top-20 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          getData()?.className
        }`}
      >
        {/* <Icon icon={getData()?.icon} className="h-5 w-5" /> */}
        {ReactIcon && <ReactIcon className="h-5 w-5" />}
      </div>
      <div className="ml-3 text-sm font-normal">{getData()?.message}</div>
      <Toast.Toggle />
    </Toast>
  );
};
