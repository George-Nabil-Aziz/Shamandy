// React
import { useEffect, useState } from "react";

// Flowbite
import { TextInput, Label, Select } from "flowbite-react";

// TODO: Static data
import {
  PreferencesUser,
  PreferencesUser2,
  UnitPrice,
} from "../services/static-data";

export const OrderPage = () => {
  // State
  const [sandwitchCount, setSandwitchCount] = useState(0);
  const [sandwitchKind, setSandwitchKind] = useState(1);

  useEffect(() => setSandwitchKind("fool"), []);

  return (
    <div className="flex items-center gap-4">
      I will get
      <TextInput
        value={sandwitchCount}
        type="number"
        min={0}
        onChange={(num) => setSandwitchCount(num.target.value)}
      />
      sandwitch
      <Select
        id="sandwitch"
        required
        onChange={(num) => setSandwitchKind(num.target.value)}
      >
        {Object.keys(UnitPrice).map((sandwitch) => (
          <option key={sandwitch}>{sandwitch}</option>
        ))}
      </Select>
      = {sandwitchCount * UnitPrice[sandwitchKind]}
    </div>
  );
};
