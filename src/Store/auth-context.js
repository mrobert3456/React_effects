import React, { useState, useEffect} from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // for better IDE completion
  onLogin: (email, password) => {},
}); //returns an object that contains a component

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //it will only run if the dependecies are changed, and the component is reevaulated
    const storedUserLogInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLogInfo === "1") {
      setIsLoggedIn(true); //this triggers the component fuction to run again
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {

      localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

//context useful when dealing with multiple datas which should be passed through props
//to other components

//So it breaks up the props chain, and introduces a messagebus type of pattern
//It has two implementation ways:
// use context.Provider: context is available of all children components
// and in the children components we can use context.Consumer to listen to the datas

//other way: useContext hook
