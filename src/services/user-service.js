import apiFetch from "./api-fetch"

export function getUser() {
    const response = apiFetch("profile");
    console.log("response", response)
    // const {_token, ...user} = apiFetch("profile");
    return response;
}