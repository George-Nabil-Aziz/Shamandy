// React
import { useContext, useEffect, useState } from "react";

// Core
import { AppContext, AppButton, db } from "/src";

// Firebase
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

// Flowbite
import { Label, Select, TextInput } from "flowbite-react";

// React icons
import { FaSnowman, FaRegSmileBeam } from "react-icons/fa";

export const Edit = () => {
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
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteDoc(
        doc(db, "firebase-items", String(formData?.id)),
        formData
      );
      handleGetAllItems();
      handleInitialValue();
      alert("Food deleted successfully!");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "firebase-items", String(formData?.id)));
      await setDoc(doc(db, "firebase-items", String(formData?.id)), formData);
      handleGetAllItems();
      handleInitialValue();
      alert("Food updated successfully!");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInitialValue = () =>
    setFormData(firebaseAllItems[0] || { id: "", name: "", price: "" });

  // On mount
  useEffect(() => {
    if (firebaseAllItems) {
      handleInitialValue();
    }
  }, [firebaseAllItems]);

  return (
    <div className="flex flex-col gap-4">
      {firebaseAllItems?.length > 0 ? (
        <>
          <div>
            <Label
              htmlFor="id"
              value="Select food:"
              className="text-textColor dark:text-darkTextColor text-lg"
            />
            <Select
              id="id"
              className="capitalize-select"
              onChange={(e) => {
                handleChange(e);
                setFormData({
                  ...formData,
                  id: firebaseAllItems?.find(
                    (item) => e.target.value === item?.id
                  )?.id,
                  name: firebaseAllItems?.find(
                    (item) => e.target.value === item?.id
                  )?.name,
                  price: firebaseAllItems?.find(
                    (item) => e.target.value === item?.id
                  )?.price,
                });
              }}
            >
              {firebaseAllItems?.map((item) => (
                <option key={item?.id} value={item?.name}>
                  {item?.name} 💰 {item?.price} LE
                </option>
              ))}
            </Select>
          </div>

          <div>
            <Label
              htmlFor="name"
              value="Name:"
              className="text-textColor dark:text-darkTextColor text-lg"
            />
            <TextInput
              id="name"
              type="text"
              value={formData?.name}
              onChange={handleChange}
              icon={FaSnowman}
              rightIcon={FaRegSmileBeam}
              // addon="Bro"
            />
          </div>

          <div>
            <Label
              htmlFor="price"
              value="Price:"
              className="text-textColor dark:text-darkTextColor text-lg"
            />
            <TextInput
              id="price"
              type="number"
              value={formData?.price}
              onChange={handleChange}
            />
          </div>

          <AppButton
            label="Update"
            icon="basil:save-outline"
            className="cursor-pointer"
            onClick={handleUpdate}
            loading={loading}
            disabled={loading}
          />

          <AppButton
            label="Delete"
            danger
            icon="ic:baseline-delete-forever"
            className="cursor-pointer"
            onClick={handleDelete}
            loading={loading}
            disabled={loading}
          />
        </>
      ) : (
        <div>Create food</div>
      )}
    </div>
  );
};
