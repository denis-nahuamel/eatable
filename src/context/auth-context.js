import { createContext, useState, useEffect, useContext } from "react";
import {useNavigate} from "react-router-dom";
import * as sessions from "../services/auth-service.js";
import { getUser } from "../services/user-service";

const AuthContext = createContext();
export const  AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      getUser().then((data)=>{
        setLoading(false);
        setUser(data)
      } ).catch((error)=> console.log(error))
    }, [])
    const login = (credentials)=> {
        return sessions.login(credentials).then((user)=>{
            setUser(user)
            navigate("profile")
        })
    }

    const logout = () => {
        return sessions.logout().then(()=> {
            setUser(null);
            navigate("login")
        })
    }

    const value = {
        user, login, logout
    }
    
    if(loading) return <p>Loading...</p>

    return <AuthContext.Provider value={value} {...props} />
}

const useAuth = ()=> {
    return useContext(AuthContext)
}