// React
import { Link } from "react-router-dom";

// UI
import { Icon } from "/src";

// Flowbite
import { Button } from "flowbite-react";

// React icons
import { ImSpinner9 } from "react-icons/im";

export const AppButton = ({
  label,
  icon,
  path,
  danger,
  loading,
  size = "sm",
  ...button
}) => {
  const customTheme = {
    inner: {
      outline: "border border-transparent text-lime-800 dark:text-lime-300",
    },
  };

  return (
    <div>
      <Button
        theme={customTheme}
        key={path && path}
        as={path && Link}
        to={path && path}
        gradientMonochrome={danger ? "failure" : "lime"}
        isProcessing={loading}
        processingSpinner={
          loading && <ImSpinner9 className="h-6 w-6 animate-spin" />
        }
        size={size}
        pill
        {...button}
      >
        <div>{label}</div>
        {icon && <Icon icon={icon} className={!!label && "ml-2"} width={18} />}
      </Button>
    </div>
  );
};
