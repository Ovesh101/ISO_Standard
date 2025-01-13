"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Dummy user data for simulation
const DUMMY_USER = {
  email: "test@example.com",
  password: "123", 
};

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    // Simulating user login check with dummy data
    const simulateLogin = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      console.log("get from the data succesfully" , storedUser);
      

      if (storedUser?.email === DUMMY_USER.email && storedUser?.password === DUMMY_USER.password) {
        setUser(storedUser);
      } else {
        setUser(null);
      }
    };

    simulateLogin();
  }, []);


  const login = (email, password) => {
    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
      const user = { email };
      localStorage.setItem("user", JSON.stringify(user)); // Store the user in localStorage for persistence
      setUser(user);
    } else {
      alert("Invalid email or password!");
    }
  };


  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
 
        isLoading: user === undefined,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook for using AuthContext
export const useAuth = () => useContext(AuthContext);
