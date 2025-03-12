// React
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Core
import { AppButton, auth, AppContext } from "/src";

// Firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// Flowbite
import { Card, Label, TextInput } from "flowbite-react";

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
  } = useContext(AppContext);

  // State
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({});

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
        if (isSignUp) {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            formData?.email,
            formData?.password
          );
          const user = userCredential.user;
          await updateProfile(user, formData);

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
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("User logged out successfully.");
    } catch (error) {
      alert("Error logging out:", error.message);
    }
  };

  return (
    <Card className="max-w-sm">
      {firebaseUserData?.uid ? (
        <AppButton type="button" label="Log out" onClick={handleLogout} />
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
              <Label htmlFor="phone" value="Your phone number" />
              <TextInput
                id="phone"
                type="number"
                placeholder="Your phone number"
                value={formData?.phone}
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
            label={isSignUp ? "Sign Up" : "Log In"}
            disabled={
              isSignUp && formData?.password !== formData?.confirmPassword
            }
          />
          <div className="flex items-center gap-2">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <div className="underline" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Log In" : "Sign Up"}
            </div>
          </div>
        </form>
      )}
    </Card>
  );
};
