import { createContext, useContext, useState } from "react";

// Define context type
interface AuthContextType {
  loginActive: boolean;
  signupActive: boolean;
  setLoginActive: React.Dispatch<React.SetStateAction<boolean>>;
  setSignupActive: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom Hook to use context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Context Provider
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loginActive, setLoginActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);

  return (
    <AuthContext.Provider value={{ loginActive, signupActive, setLoginActive, setSignupActive }}>
      {children}
    </AuthContext.Provider>
  );
};
