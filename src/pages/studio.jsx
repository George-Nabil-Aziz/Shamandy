// React
import { useContext, useState } from "react";

// Immer
import { useImmer } from "use-immer";

// Core
import { AppContext, useNotify } from "/src";

export const StudioPage = () => {
  // Hook
  const { notify } = useNotify();

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
    handleLogout,

    isToastVisible,
    setToastVisible,
  } = useContext(AppContext);

  const [immer, setImmer] = useImmer({
    name: "Sayed",
    age: 22,
  });
  const updateImmer = () => {
    setImmer((prev) => {
      prev.age += 1;
    });
  };
  const addImmer = () => {
    setImmer((prev) => {
      prev.gender = "male";
    });
  };
  const deleteImmer = () => {
    setImmer((draft) => {
      delete draft.name;
    });
  };

  const [state, setState] = useState({
    name: "Sayed",
    age: 22,
  });
  const deleteState = () => {
    setState((draft) => {
      const { age, ...props } = draft;
      return props;
    });
  };
  const addState = () => {
    setState((prev) => ({
      ...prev,
      gender: "male",
    }));
  };

  return (
    <>
      <div className="bg-cyan-900 text-red-700 dark:text-cyan-400">
        <div onClick={updateImmer}>updateImmer</div>
        <div onClick={deleteImmer}>deleteImmer</div>
        <div onClick={addImmer}>addImmer</div>
        <div>{JSON.stringify(immer)}</div>
      </div>

      <hr />

      <div className="bg-green-900 text-red-700 dark:text-cyan-400">
        <div onClick={deleteState}>deleteState</div>
        <div onClick={addState}>addState</div>
        <div>{JSON.stringify(state)}</div>
      </div>

      <hr />

      <div onClick={() => notify()}>Toats 1</div>
      <div onClick={() => notify.warning()}>Toats 2</div>
      <div onClick={() => notify.error()}>Toats 3</div>
    </>
  );
};
