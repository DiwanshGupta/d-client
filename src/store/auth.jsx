import { createContext, useContext, useEffect, useState } from "react";

export const Authcontext = createContext();

export const Authprovider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setuser] = useState("");
  const [services, setServices] = useState("");
  const [isloading, setLoading] = useState(true);
  const autheader = `Bearer ${token}`;
  // Store Token in local storage
  const storetokeinLs = (servertoken) => {
    setToken(servertoken);

    return localStorage.setItem("token", servertoken);
  };
  // check wheteher token present or not
  let islogin = !!token;
  //   Logout funxtion
  const Logoutuser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  // JWt verification
  const userAuthentication = async () => {
    try {
      const response = await fetch(
        "https://d-mernserver.onrender.com/api/auth/user",
        {
          method: "GET",
          headers: {
            Authorization: autheader,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setuser(data.userdata);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {}
  };
  const getServices = async () => {
    try {
      const response = await fetch(
        "https://d-mernserver.onrender.com/api/data/service",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();

        setServices(data.msg);
      }
    } catch (error) {
      console.log(`Services error from fronted: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <Authcontext.Provider
      value={{
        islogin,
        services,
        user,
        isloading,
        autheader,
        storetokeinLs,
        Logoutuser,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => {
  return useContext(Authcontext);
};
