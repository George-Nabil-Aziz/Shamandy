// React
import { Link } from "react-router-dom";

// Flowbite
import { Button as FlowbiteButton } from "flowbite-react";

// React icons
import { ImSpinner9 } from "react-icons/im";

export const Button = ({ label, path, danger, loading, ...button }) => {
  return (
    <div>
      <FlowbiteButton
        key={path && path}
        as={path && Link}
        to={path && path}
        gradientMonochrome={danger ? "failure" : "lime"}
        isProcessing={loading}
        processingSpinner={
          loading && <ImSpinner9 className="h-6 w-6 animate-spin" />
        }
        pill
        {...button}
      >
        <div>{label}</div>
      </FlowbiteButton>
    </div>
  );
};
