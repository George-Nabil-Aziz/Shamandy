import { createContext, useState } from "react";

// Static data
import {
  mainSandwichs,
  PreferencesUser,
  UnitPrice,
} from "../services/static-data";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [mainUserSandwitchs, setMainUserSandwitchs] = useState(mainSandwichs);
  const [usersData, setUsersData] = useState(PreferencesUser);
  const [unitPrice, setUnitPrice] = useState(UnitPrice);

  return (
    <AppContext.Provider
      value={{
        mainUserSandwitchs,
        setMainUserSandwitchs,
        usersData,
        setUsersData,
        unitPrice,
        setUnitPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
