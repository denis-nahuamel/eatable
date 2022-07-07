/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { cardFood, imageFood } from "../styles/pages";
import { subTitle, title } from "../styles/typography";
const CardCheckout = ({element, onHandlePage}) => {
    localStorage.setItem("current_food", JSON.stringify(element));
    return (
    <div css={css`${cardFood}`} onClick={()=> onHandlePage("food")}>
        <img css={css`${imageFood}`} src={element.picture_url}/>
        <div>
            <label css={css`${title}`}>{element.name}</label>
        </div>
        <div>
            <label css={css`${subTitle}`}>$ {element.price}</label>
        </div>
    </div>)
}
export default CardCheckout;