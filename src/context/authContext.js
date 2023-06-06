import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "./cartContext";
export const AuthContext = createContext({ isLoggedIn: false });

export function AuthProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const [token, setToken] = useState("");
  // const { resetCounters, loginDataLoad } = useCart();
  // const { setShowLoader } = useCart();

  const logIn = async () => {
    await axios
      .post("/api/auth/login", JSON.stringify({ email, password }))
      .then((res) => {
        console.log(res);
        const token = res.data.encodedToken;
        setUser(res.data.foundUser);
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(res.data.foundUser));
        setIsLoggedIn(true);
        // loginDataLoad();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUser([]);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setToken,
        token,
        setIsLoggedIn,
        logIn,
        logOut,
        setEmail,
        setPassword,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () => useContext(AuthContext);
