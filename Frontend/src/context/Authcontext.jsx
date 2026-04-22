import{createContext, useState} from 'react'

export const Authcontext = createContext();

export const AuthcontextProvider = ({children})=>{
    const {AuthDeatils, setAuthdetails} = useState({
        isAuthenticated:false,
        email:null,
        token:null
    });

    const login = ({email, token})=>{
        setAuthdetails({
            isAuthenticated:true,
            email,
            token
        });
    }

    const logout = ()=>{
        setAuthdetails({
            isAuthenticated:false,
            email:null,
            token:null
        })
      
    }

    return <Authcontext.Provider value={{AuthDeatils, login, logout}}>{children}</Authcontext.Provider>
}