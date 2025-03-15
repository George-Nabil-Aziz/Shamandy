// React
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Core
import { Enums, AppButton, auth, AppContext, db } from "/src";

// Firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Flowbite
import { Card, Label, Select, TextInput } from "flowbite-react";

export const Login = () => {
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
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  // Hooks
  const navigate = useNavigate();

  // Handle change values
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleAuth = async (e) => {
    e.preventDefault();

    if (
      !isSignUp ||
      (isSignUp && formData?.password === formData?.confirmPassword)
    ) {
      try {
        setLoading(true);
        if (isSignUp) {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            formData?.email,
            formData?.password
          );
          const user = userCredential.user;
          await updateProfile(user, formData);
          await setDoc(doc(db, "firebase-users", user.uid), formData, {
            merge: true,
          });

          alert("Account created successfully!");
        } else {
          await signInWithEmailAndPassword(
            auth,
            formData?.email,
            formData?.password
          );
          alert("Logged in successfully!");
        }
        setFormData({});
        navigate("/");
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Card className="max-w-md overflow-hidden">
      {firebaseUserData?.uid ? (
        <AppButton
          type="button"
          label="Logout"
          onClick={handleLogout}
          loading={loading}
          disabled={loading}
        />
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleAuth}>
          {isSignUp && (
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
          )}

          <div>
            <Label htmlFor="email" value="Your email" />
            <TextInput
              id="email"
              type="email"
              placeholder="Email"
              required
              value={formData?.email}
              onChange={handleChange}
            />
          </div>

          {isSignUp && (
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
          )}

          {isSignUp && (
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
          )}

          {isSignUp && (
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
          )}

          <div>
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

          {isSignUp && (
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
            </div>
          )}

          <AppButton
            type="submit"
            label={isSignUp ? "Signup" : "Login"}
            loading={loading}
            disabled={
              loading ||
              (isSignUp && formData?.password !== formData?.confirmPassword)
            }
          />
          <div className="flex items-center gap-2">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <div
              className="underline cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Login" : "Signup"}
            </div>
          </div>
        </form>
      )}
    </Card>
  );
};
