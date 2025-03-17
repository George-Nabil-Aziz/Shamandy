import { useImmer } from "use-immer";
import { useState } from "react";

export const StudioPage = () => {
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
    </>
  );
};
