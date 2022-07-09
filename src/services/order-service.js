import apiFetch from "./api-fetch"

export const postOrder = (data)=>{
    return apiFetch("orders", {body:data}).then((response)=> {return response})
}