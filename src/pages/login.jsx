// React
import { useState } from "react";

// Core
import { AppButton, auth } from "/src";

// Firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Flowbite
import { Card, Label, TextInput } from "flowbite-react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Card className="max-w-sm">
      <form className="flex flex-col gap-4" onSubmit={handleAuth}>
        <div>
          <Label htmlFor="email1" value="Your email" />
          <TextInput
            id="email1"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="password1" value="Your password" />
          <TextInput
            id="password1"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <AppButton type="submit" label={isSignUp ? "Sign Up" : "Log In"} />
        <div className="flex items-center gap-2">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <div className="underline" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Log In" : "Sign Up"}
          </div>
        </div>
      </form>
    </Card>
  );
};
