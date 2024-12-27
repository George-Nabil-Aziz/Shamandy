// React
import { useContext, useState } from "react";

// Core
import { TextInput } from "flowbite-react";
import { AppContext, AppButton } from "/src";

// React icons
import { SiBurgerking } from "react-icons/si";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaSnowman } from "react-icons/fa";
import { FaRegSmileBeam } from "react-icons/fa";

export const Create = () => {
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
  const [newLabel, setNewLabel] = useState("");
  const [newLabelPrice, setNewLabelPrice] = useState("");
  const [newPerson, setNewPerson] = useState("");

  return (
    <div className="space-y-4">
      <p>Enter food:</p>
      <TextInput
        onChange={(text) => setNewLabel(text.currentTarget.value)}
        value={newLabel}
        placeholder="Food name ..."
        icon={SiBurgerking}
        rightIcon={MdOutlineRestaurant}
        // addon="Ymmy"
      />
      <p>Do you know it's price ?</p>
      <TextInput
        type="number"
        min={0}
        disabled={!newLabel}
        onChange={(text) => setNewLabelPrice(+text.currentTarget.value)}
        value={newLabelPrice}
        placeholder="0"
        icon={FaMoneyBill1Wave}
        rightIcon={RiMoneyDollarCircleLine}
        // addon="$"
      />
      <AppButton
        label="Save"
        icon="basil:save-outline"
        onClick={() => {
          setMainUserSandwichs((prev) => ({
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
        placeholder="Person name ..."
        icon={FaSnowman}
        rightIcon={FaRegSmileBeam}
        // addon="Bro"
      />
      <AppButton
        label="Save"
        icon="basil:save-outline"
        onClick={() => {
          newPerson &&
            setUsersData((prev) => ({
              ...prev,
              [newPerson]: mainUserSandwichs,
            }));
          setNewPerson("");
        }}
        className="w-full"
        disabled={!newPerson}
      />
    </div>
  );
};
