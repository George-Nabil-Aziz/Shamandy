// React
import { useContext, useState } from "react";

// Core
import { TextInput } from "flowbite-react";
import { AppContext, AppButton } from "/src";

export const Create = () => {
  // Context
  const {
    mainUserSandwitchs,
    setMainUserSandwitchs,
    usersData,
    setUsersData,
    unitPrice,
    setUnitPrice,
  } = useContext(AppContext);

  // State
  const [newLabel, setNewLabel] = useState();
  const [newLabelPrice, setNewLabelPrice] = useState(0);
  const [newPerson, setNewPerson] = useState();

  return (
    <div className="space-y-4">
      <p>Enter food:</p>
      <TextInput
        onChange={(text) => setNewLabel(text.currentTarget.value)}
        value={newLabel}
      />
      <p>Do you know it's price ?</p>
      <TextInput
        type="number"
        min={0}
        disabled={!newLabel}
        onChange={(text) => setNewLabelPrice(text.currentTarget.value)}
        value={newLabelPrice}
      />
      <AppButton
        label="Save"
        icon="basil:save-outline"
        onClick={() => {
          setMainUserSandwitchs((prev) => ({
            ...prev,
            [newLabel]: 0,
          }));
          setUnitPrice((prev) => ({
            ...prev,
            [newLabel]: newLabelPrice,
          }));
          Object.keys(usersData).map((user) => {
            setUsersData((prev) => ({
              ...prev,
              [user]: {
                ...usersData[user],
                [newLabel]: 0,
              },
            }));
          });

          setNewLabel("");
          setNewLabelPrice("");
        }}
        className="w-full"
        disabled={!newLabel}
      />

      <hr />

      <p>Enter new person:</p>
      <TextInput
        onChange={(text) => setNewPerson(text.currentTarget.value)}
        value={newPerson}
      />
      <AppButton
        label="Save"
        icon="basil:save-outline"
        onClick={() => {
          newPerson &&
            setUsersData((prev) => ({
              ...prev,
              [newPerson]: mainUserSandwitchs,
            }));
          setNewPerson("");
        }}
        className="w-full"
        disabled={!newPerson}
      />
    </div>
  );
};
