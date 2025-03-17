// React
import { useContext, useState } from "react";

// Core
import { db, AppContext, AppButton, useNotify } from "/src";

// Flowbite
import { Label, TextInput } from "flowbite-react";

// Firebase
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

// React icons
import { SiBurgerking } from "react-icons/si";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export const Create = () => {
  // Context
  const {
    firebaseUserData,
    setFirebaseUserData,
    firebaseFullUserData,
    setFirebaseFullUserData,
    handleGetUserFullData,
    firebaseAllUsers,
    setFirebaseAllUsers,
    handleGetAllUsers,
    firebaseAllItems,
    setFirebaseAllItems,
    handleGetAllItems,
  } = useContext(AppContext);

  // Hooks
  const { notify } = useNotify();

  // State
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const auth = getAuth();
  const user = auth.currentUser;

  const handleAddItems = async () => {
    try {
      setLoading(true);
      await setDoc(doc(db, "firebase-items", formData?.name), formData, {
        merge: true,
      });
      setFormData({ name: "", price: "" });
      handleGetAllItems();
      notify("Food added successfully!");
    } catch (error) {
      notify.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label
          htmlFor="name"
          value="Enter food:"
          className="text-textColor dark:text-darkTextColor font-normal text-md"
        />
        <TextInput
          id="name"
          onChange={handleChange}
          value={formData?.name}
          placeholder="Food name ..."
          icon={SiBurgerking}
          rightIcon={MdOutlineRestaurant}
          // addon="Ymmy"
        />
      </div>

      <div>
        <Label
          htmlFor="name"
          value="Do you know it's price ?"
          className="text-textColor dark:text-darkTextColor font-normal text-md"
        />
        <TextInput
          id="price"
          type="number"
          min={0}
          disabled={!formData?.name}
          onChange={handleChange}
          value={formData.price}
          placeholder="0"
          icon={FaMoneyBill1Wave}
          rightIcon={RiMoneyDollarCircleLine}
          // addon="$"
        />
      </div>

      <AppButton
        label="Create"
        icon="material-symbols:add-to-photos-outline-rounded"
        className="w-full"
        onClick={handleAddItems}
        loading={loading}
        disabled={loading || !formData?.name}
      />
    </div>
  );
};
