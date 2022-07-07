import { createContext, useState, useEffect, useContext } from "react";
import {useNavigate} from "react-router-dom";
import * as sessions from "../services/auth-service.js";
import { getUser, signup, update } from "../services/user-service";

const AuthContext = createContext();

export const  AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
       
      getUser().then((data)=>{
        setLoading(false);
        setUser(data)
      } )
      .catch((error)=> {console.log("error", error); setLoading(false)})
    }, [])

    const login = (credentials)=> {
        return sessions.login(credentials).then(user=>{
            setUser(user)
            navigate("auth")
        })
    }
    const signupUser = (credentials) => {
        return signup(credentials).then(user => {
            setUser(user)
            navigate("auth")
        })
    }

    const logout = () => {
        return sessions.logout().then(()=> {
            setUser(null);
            navigate("logged")
        })
    }

    const updateUser = (credentials) => {
        return update(credentials).then((userData) =>{
            setUser(userData);
            console.log("user upda", user)
        })
    }

    const value = {
        user, 
        login, 
        logout,
        signupUser, 
        updateUser
    }
    
    if(loading) return <p>Loading...</p>

    return <AuthContext.Provider value={value} {...props} />
}

export function useAuth(){
    return useContext(AuthContext)
}