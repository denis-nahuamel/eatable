import apiFetch from "./api-fetch"

export const getUser = () => {
    const {_token, ...user} = apiFetch("profile");
    return user;
}