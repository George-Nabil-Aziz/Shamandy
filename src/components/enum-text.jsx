// Core
import { Enums } from "/src";

export const EnumText = ({ name, value }) => {
  return (
    Enums[name]?.find((singleEnum) => singleEnum?.value === +value)?.label ||
    "—"
  );
};
