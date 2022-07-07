import apiFetch from "./api-fetch"

export const getProducts = () => {
    return apiFetch("products").then((response)=> {return response})
}