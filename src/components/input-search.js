/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { container, containerGap, inputSearch } from "../styles/utils";
const InputSearch = ({onHandlePage})=>{
return (
    <div css={css`${containerGap}`}>
        <div css={css`${containerGap}`}>
            <img src={process.env.PUBLIC_URL + "/search.png"}/>
            <input css={css`${inputSearch}`} placeholder="Search" type="text"/>
        </div>
        <div><img onClick={()=> onHandlePage()} src={process.env.PUBLIC_URL + "/cart.png"}/></div>
    </div>
)
}
export default InputSearch;