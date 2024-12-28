import { createContext, useState } from "react";

// Static data
import {
  mainSandwichs,
  PreferencesUser,
  UnitPrice,
  FirebaseDabaseIdName,
} from "../services/static-data";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [mainUserSandwichs, setMainUserSandwichs] = useState(mainSandwichs);
  const [usersData, setUsersData] = useState(PreferencesUser);
  const [unitPrice, setUnitPrice] = useState(UnitPrice);
  const [firebaseDabaseIdName, setFirebaseDabaseIdName] =
    useState(FirebaseDabaseIdName);

  return (
    <AppContext.Provider
      value={{
        mainUserSandwichs,
        setMainUserSandwichs,
        usersData,
        setUsersData,
        unitPrice,
        setUnitPrice,
        firebaseDabaseIdName,
        setFirebaseDabaseIdName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
