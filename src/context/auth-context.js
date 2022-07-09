import { createContext, useState, useEffect, useContext } from "react";
import {useNavigate} from "react-router-dom";
import * as sessions from "../services/auth-service.js";
import { getUser, signup, update } from "../services/user-service";

const AuthContext = createContext();

export const  AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [title, setTitle] = useState("");
    const [previousPage, setPreviousPage] = useState("");
    const [loading, setLoading] = useState(true);
    const [checkoutList, setCheckoutList] = useState([]);
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
    const addCheckoutList = (value)=> {
        value.total = value.price;
        value.quantity = 1;
        setCheckoutList([...checkoutList, value ]);
    }

    const handleTitle = (value) => {
        setTitle(value)
    }
    const handlePreviousPage = (value) => {
        setPreviousPage(value)
    }
    const handleGoPreviousPage = () => {
        //navigate(previousPage)
    }
    const value = {
        user, 
        checkoutList,
        title,
        handleTitle,
        previousPage,
        handlePreviousPage,
        login, 
        logout,
        signupUser, 
        updateUser,
        addCheckoutList
    }
    
    if(loading) return <p>Loading...</p>

    return <AuthContext.Provider value={value} {...props} />
}

export function useAuth(){
    return useContext(AuthContext)
}