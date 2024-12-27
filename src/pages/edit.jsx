// React
import { useContext, useEffect, useState } from "react";

// Core
import { AppContext, AppButton } from "/src";

// Flowbite
import { Label, Select, TextInput } from "flowbite-react";

export const Edit = () => {
  // Context
  const {
    mainUserSandwichs,
    setMainUserSandwichs,
    usersData,
    setUsersData,
    unitPrice,
    setUnitPrice,
  } = useContext(AppContext);

  // State
  const [selectedFood, setSelectedFood] = useState(Object.keys(unitPrice)[0]);
  const [selectedFoodEditValues, setSelectedFoodEditValues] = useState({
    value: "",
    price: 0,
  });

  // On mount
  useEffect(() => {
    setSelectedFoodEditValues({
      value: selectedFood,
      price: unitPrice[selectedFood],
    });
  }, [selectedFood]);

  return (
    <div className="flex items-end flex-wrap gap-4">
      <div className="w-40">
        <Label
          htmlFor="food"
          value="Select food:"
          className="text-textColor dark:text-darkTextColor text-lg"
        />

        <Select
          id="food"
          className="capitalize-select"
          onChange={(e) => setSelectedFood(e.target.value)}
        >
          {Object.keys(unitPrice).map((singleUnitPrice) => (
            <option key={singleUnitPrice}>{singleUnitPrice}</option>
          ))}
        </Select>
      </div>

      {/* TODO: Can't edit sandwich name */}
      {/* <div>
        <Label
          htmlFor="food"
          value="Name:"
          className="text-textColor dark:text-darkTextColor text-lg"
        />
        <TextInput
          type="text"
          value={selectedFoodEditValues.value}
          onChange={(e) =>
            setSelectedFoodEditValues((prev) => ({
              ...prev,
              value: e.target.value,
            }))
          }
        />
      </div> */}

      <div>
        <Label
          htmlFor="food"
          value="Price:"
          className="text-textColor dark:text-darkTextColor text-lg"
        />
        <TextInput
          type="number"
          value={selectedFoodEditValues.price}
          onChange={(e) => {
            setSelectedFoodEditValues((prev) => ({
              ...prev,
              price: e.target.value,
            }));
          }}
          className="w-20"
        />
      </div>

      <AppButton
        label="Save"
        icon="basil:save-outline"
        className="cursor-pointer"
        onClick={() => {
          delete unitPrice[selectedFood];
          setUnitPrice((prev) => ({
            ...prev,
            [selectedFoodEditValues.value]: +selectedFoodEditValues.price,
          }));
        }}
      />

      <AppButton
        label="Delete"
        danger
        icon="ic:baseline-delete-forever"
        className="cursor-pointer"
        onClick={() => {
          Object.keys(usersData).map((user) => {
            delete usersData[user][selectedFood];
          });
          Object.keys(unitPrice).map(() => {
            delete unitPrice[selectedFood];
          });
        }}
      />
    </div>
  );
};
