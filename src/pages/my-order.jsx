// React
import { useEffect, useState, useContext } from "react";

// Flowbite
import { TextInput, Label, Select } from "flowbite-react";

// TODO: Static data
import { PreferencesUser, UnitPrice } from "../services/static-data";

// Core
import { AppContext, AppButton, auth, db } from "/src";

// Firebase
import { getAuth } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  count,
} from "firebase/firestore";

export const MyOrderPage = () => {
  // Context
  const {
    mainUserSandwichs,
    setMainUserSandwichs,
    usersData,
    setUsersData,
    unitPrice,
    setUnitPrice,
    firebaseDabaseIdName,
    setFirebaseDabaseIdName,

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
    handleLogout,
  } = useContext(AppContext);

  // State
  const [formData, setFormData] = useState({});
  const [myOrder, setMyOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  // Firebase
  const auth = getAuth();
  const user = auth.currentUser;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSaveOrder = () => {
    setMyOrder((prev) => [
      ...prev?.filter((order) => order?.name !== formData?.name),
      formData,
    ]);
    setFormData({ ...formData, count: "" });
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await setDoc(
        doc(db, "firebase-users", user.uid),
        { order: myOrder },
        { merge: true }
      );
      handleGetAllItems();
      handleInitialValue();
      alert("Order added successfully!");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInitialValue = () =>
    setFormData({ name: firebaseAllItems[0]?.name });

  // On mount
  useEffect(() => {
    if (firebaseAllItems) {
      handleInitialValue();
    }
  }, [firebaseAllItems]);

  return (
    <div className="space-y-4">
      <div>
        <Label
          htmlFor="count"
          value="I want"
          className="text-textColor dark:text-darkTextColor text-lg"
        />
        <TextInput
          id="count"
          value={formData?.count}
          type="number"
          min={0}
          onChange={handleChange}
          placeholder="How many ?"
        />
      </div>

      <div>
        <Label
          htmlFor="name"
          value="Sandwich"
          className="text-textColor dark:text-darkTextColor text-lg"
        />
        <Select
          id="name"
          className="capitalize-select"
          required
          onChange={handleChange}
        >
          {firebaseAllItems?.map((item) => (
            <option
              key={item?.id}
              value={item?.name}
              selected={formData?.name === item?.name}
            >
              {item?.name}
            </option>
          ))}
        </Select>
      </div>

      <AppButton
        label="Save"
        icon="basil:save-outline"
        className="cursor-pointer"
        onClick={handleSaveOrder}
        outline
        loading={loading}
        disabled={loading || !formData?.name || !formData?.count}
      />

      {myOrder.length > 0 && (
        <>
          <hr />

          {firebaseAllItems?.map((item) => (
            <div key={item?.name} className="space-y-2 capitalize font-black">
              {item?.name} :{" "}
              {myOrder?.find((order) => order?.name === item?.name)?.count}
            </div>
          ))}

          <AppButton
            label="Update"
            icon="material-symbols:sync-saved-locally-outline"
            className="cursor-pointer"
            onClick={handleUpdate}
            loading={loading}
            disabled={loading}
          />
        </>
      )}
    </div>
  );
};
