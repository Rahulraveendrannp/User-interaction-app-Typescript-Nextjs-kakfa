import React, { createContext } from "react";

interface AppContextType {
    user:String,
    setUser: (newuser:string) => void,
  }
  
  const AppContext = createContext<AppContextType | undefined>(undefined);
  
  export default AppContext;