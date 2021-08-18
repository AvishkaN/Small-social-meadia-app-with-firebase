import React,{useState} from 'react';

const authContext=React.createContext({
    token:'',
    email:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
});

export const AuthContextProvider=(props)=>{
    const initialState=localStorage.getItem('token');
    const getEmail=localStorage.getItem('email');
    const [tokenDetails,setTokenDetails]=useState({
        initialState:initialState,
        email:getEmail,
    });

    
    const userIsLoggedIn=!!tokenDetails.initialState; // cool mehtod for get boolean value

    const loginHandler=(tokenq,email)=>{
        setTokenDetails({
            initialState:tokenq,
            email:email,
        });
        // console.log(token);
        console.log(email);
        localStorage.setItem('token',tokenq);
        localStorage.setItem('email',email);
        
    };

    const logoutHandler=()=>{
        setTokenDetails({
            initialState:null,
            email:'',
        });
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }

    const contextValue={
        token:tokenDetails.initialState,
        email:tokenDetails.email,
        data:[],
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logOut:logoutHandler,
    };

    // console.log(contextValue);

    return (
        <authContext.Provider value={contextValue}>
            {props.children}
        </authContext.Provider>
    );
};


export default authContext;
