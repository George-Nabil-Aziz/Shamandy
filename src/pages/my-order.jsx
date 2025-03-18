// React
import { useEffect, useState, useContext } from "react";

// Flowbite
import { TextInput, Label, Select } from "flowbite-react";

// Core
import { db, auth, AppContext, AppButton, useNotify } from "/src";

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
      handleGetUserFullData();
      handleGetAllUsers();
      handleInitialValue();
      setMyOrder([]);
      notify("Order added successfully!");
    } catch (error) {
      notify.error(error.message);
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

  useEffect(() => {
    setMyOrder(
      firebaseFullUserData?.order ||
        firebaseAllItems?.map((item) => ({ name: item?.name, count: 0 }))
    );
  }, [firebaseFullUserData]);

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
              defaultValue={formData?.name === item?.name}
            >
              {item?.name}
            </option>
          ))}
        </Select>
      </div>

      <hr />

      {firebaseAllItems?.map((item) => (
        <div key={item?.name} className="space-y-2 capitalize font-black">
          <span>{item?.name}: </span>
          <span
            className={`${
              +myOrder?.find((order) => order?.name === item?.name)?.count !==
                +firebaseFullUserData?.order?.find(
                  (order) => order?.name === item?.name
                )?.count && "line-through opacity-50"
            }`}
          >
            {
              firebaseFullUserData?.order?.find(
                (order) => order?.name === item?.name
              )?.count
            }
          </span>
          {" ➡️ "}
          {myOrder?.find((order) => order?.name === item?.name)?.count}
        </div>
      ))}

      <div className="flex gap-2">
        <AppButton
          label="Save"
          icon="basil:save-outline"
          className="cursor-pointer"
          onClick={handleSaveOrder}
          outline
          loading={loading}
          disabled={loading || !formData?.name || !formData?.count}
        />

        <AppButton
          label="Finish"
          icon="material-symbols:sync-saved-locally-outline"
          className="cursor-pointer"
          onClick={handleUpdate}
          loading={loading}
          disabled={loading || myOrder?.length <= 0}
        />
      </div>
    </div>
  );
};
