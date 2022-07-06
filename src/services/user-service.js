import { tokenKey } from "../config";
import apiFetch from "./api-fetch"

export function getUser() {
    const response = apiFetch("profile");
    console.log("response", response)
    // const {_token, ...user} = apiFetch("profile");
    return response;
}
export function signup(credentials) {
    return apiFetch("users", {body: credentials}).then((response) =>{
        const {token, ...user} = response;
        sessionStorage.setItem(tokenKey, token)
        console.log(token, user)
        return user;
    } )
}