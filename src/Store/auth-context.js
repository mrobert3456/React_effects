import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn:false
}); //returns an object that contains a component

export default AuthContext;

//context useful when dealing with multiple datas which should be passed through props
//to other components

//So it breaks up the props chain, and introduces a messagebus type of pattern
//It has two implementation ways:
    // use context.Provider: context is available of all children components
    // and in the children components we can use context.Consumer to listen to the datas

    //other way: useContext hook