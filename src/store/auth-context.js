import React,{useState} from 'react';

const data=[
    {id:1,post:'lorem car van bus suv lorem car van bus suv lorem car van bus suv',image:'https://th.bing.com/th/id/R.c1ac59261da29eb390c2713c2ecc6018?rik=0EpOdMr%2blHG%2fAQ&pid=ImgRaw&r=0'},
    {id:2,post:'lorem q h b dare lorem car van bus suv lorem car van bus suv lorem car van bus suv',image:'https://th.bing.com/th/id/R.c1ac59261da29eb390c2713c2ecc6018?rik=0EpOdMr%2blHG%2fAQ&pid=ImgRaw&r=0'},
    {id:3,post:'lorem q h b dare lorem car van bus suv lorem car van bus suv lorem car van bus suv',image:'https://th.bing.com/th/id/R.c1ac59261da29eb390c2713c2ecc6018?rik=0EpOdMr%2blHG%2fAQ&pid=ImgRaw&r=0'},
    {id:4,post:'lorem q h b dare lorem car van bus suv lorem car van bus suv lorem car van bus suv',image:'https://th.bing.com/th/id/R.c1ac59261da29eb390c2713c2ecc6018?rik=0EpOdMr%2blHG%2fAQ&pid=ImgRaw&r=0'},
    {id:5,post:'hello  q h b dare lorem car van bus suv lorem car van bus suv lorem car van bus suv',image:'https://th.bing.com/th/id/R.c1ac59261da29eb390c2713c2ecc6018?rik=0EpOdMr%2blHG%2fAQ&pid=ImgRaw&r=0'},
    
]


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
        data:data,
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
