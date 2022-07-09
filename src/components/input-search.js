/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { container, containerGap, inputBar, inputSearch } from "../styles/utils";
const InputSearch = ({onHandlePage, onHandleSearch})=>{
    // const handleSearch =()=>{
    // }
return (
    <div css={css`${inputBar}`}>
        <div css={css`${containerGap}`}>
            <img src={process.env.PUBLIC_URL + "/search.png"}/>
            <input css={css`${inputSearch}`}
             placeholder="Search" 
             onChange={(e)=> onHandleSearch(e.target.value)}
             type="text"/>
        </div>
        <div><img onClick={()=> onHandlePage()} src={process.env.PUBLIC_URL + "/cart.png"}/></div>
    </div>
)
}
export default InputSearch;