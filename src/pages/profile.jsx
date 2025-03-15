// React
import { useContext, useEffect, useState } from "react";

// Core
import { AppButton, Enums, EnumText, auth, AppContext, db } from "/src";

// Firebase
import { updateProfile, getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Flowbite
import { Card, Label, Select, TextInput } from "flowbite-react";

export const Profile = () => {
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
    handleLogout,
  } = useContext(AppContext);

  // State
  const [isEditMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    displayName: firebaseUserData?.displayName,
    email: firebaseUserData?.email,
    phoneNumber: firebaseFullUserData?.phoneNumber,
    // phoneNumber: firebaseUserData?.phoneNumber, // phoneNumber Is empty here
    role: firebaseFullUserData?.role,
    photoURL: firebaseUserData?.photoURL,
  });

  const auth = getAuth();
  const user = auth.currentUser;

  // Handle change values
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();

    // if (formData?.password === formData?.confirmPassword) {
    try {
      await updateProfile(user, formData);
      await setDoc(doc(db, "firebase-users", user.uid), formData, {
        merge: true,
      });
      handleGetUserFullData();
      alert("Account updated successfully!");
      setEditMode(false);
    } catch (error) {
      alert(error.message);
    }
    // }
  };

  return (
    <Card className="max-w-md overflow-hidden">
      {isEditMode ? (
        <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
          <div>
            <Label htmlFor="displayName" value="Your name" />
            <TextInput
              id="displayName"
              type="text"
              placeholder="Name"
              required
              value={formData?.displayName}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="email" value="Your email" />
            <TextInput
              id="email"
              type="email"
              placeholder="Email"
              required
              value={formData?.email}
              onChange={handleChange}
              disabled
            />
          </div>

          <div>
            <Label htmlFor="phoneNumber" value="Your mobile number" />
            <TextInput
              id="phoneNumber"
              type="number"
              placeholder="Your mobile number"
              value={formData?.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="role" value="Select your role" />
            <Select id="role" onChange={handleChange} required>
              {Enums?.roles?.map((role) => (
                <option key={role?.value} value={role?.value}>
                  {role?.label}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <Label htmlFor="photoURL" value="Your photo URL" />
            <TextInput
              id="photoURL"
              type="text"
              placeholder="Your photo URL"
              value={formData?.photoURL}
              onChange={handleChange}
              required
            />
          </div>

          {/* <div>
          <Label htmlFor="password" value="Your password" />
          <TextInput
            id="password"
            type="password"
            placeholder="Password"
            value={formData?.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="confirmPassword" value="Confirm password" />
          <TextInput
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={formData?.confirmPassword}
            onChange={handleChange}
            required
            helperText={
              !formData.confirmPassword ||
              formData.password === formData.confirmPassword
                ? ""
                : "Confirm password doesn't match password"
            }
            color={
              !formData.confirmPassword ||
              formData.password === formData.confirmPassword
                ? "gray"
                : "failure"
            }
          />
        </div> */}

          <AppButton
            type="submit"
            label="Update"
            // disabled={formData?.password !== formData?.confirmPassword}
          />
        </form>
      ) : (
        <div className="text-lg space-y-2 divide-y-2">
          <AppButton
            type="button"
            label="Edit My Profile"
            onClick={() => setEditMode(true)}
          />

          {firebaseUserData?.displayName && (
            <div>Name: {firebaseUserData?.displayName}</div>
          )}
          {firebaseUserData?.email && (
            <div className="break-words">Email: {firebaseUserData?.email}</div>
          )}
          {firebaseFullUserData?.phoneNumber && (
            <div className="break-words">
              Mobile number: {firebaseFullUserData?.phoneNumber}
            </div>
          )}
          {firebaseFullUserData?.role && (
            <div className="break-words">
              Role: <EnumText name="roles" value={firebaseFullUserData?.role} />
            </div>
          )}
          {"emailVerified" in (firebaseUserData || {}) && (
            <div>
              Verified: {firebaseUserData?.emailVerified ? "Yes" : "No"}
            </div>
          )}
          {firebaseUserData?.metadata?.creationTime && (
            <div>Created at: {firebaseUserData?.metadata?.creationTime}</div>
          )}
          {firebaseUserData?.metadata?.lastSignInTime && (
            <div>
              Last login at: {firebaseUserData?.metadata?.lastSignInTime}
            </div>
          )}
          {firebaseUserData?.uid && <div>Id: {firebaseUserData?.uid}</div>}
          {firebaseUserData?.photoURL && (
            <div className="truncate">
              Photo URL: {firebaseUserData?.photoURL}
            </div>
          )}
          {firebaseUserData?.photoURL && (
            <div>
              Avatar: <img src={firebaseUserData?.photoURL} />
            </div>
          )}
        </div>
      )}
    </Card>
  );
};
