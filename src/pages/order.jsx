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
  const [sandwichCount, setSandwichCount] = useState(0);
  const [sandwichKind, setSandwichKind] = useState(1);

  useEffect(() => setSandwichKind("fool"), []);

  return (
    <div className="flex items-center gap-4">
      I will get
      <TextInput
        value={sandwichCount}
        type="number"
        min={0}
        onChange={(num) => setSandwichCount(num.target.value)}
      />
      sandwich
      <Select
        id="sandwich"
        required
        onChange={(num) => setSandwichKind(num.target.value)}
      >
        {Object.keys(UnitPrice).map((sandwich) => (
          <option key={sandwich}>{sandwich}</option>
        ))}
      </Select>
      = {sandwichCount * UnitPrice[sandwichKind]}
    </div>
  );
};
