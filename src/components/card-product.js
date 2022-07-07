/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { cardFood, imageFood } from "../styles/pages";
import { subTitle, title } from "../styles/typography";
import {useNavigate} from "react-router-dom";
const CardProduct = ({product, onHandlePage}) => {
    const handlePage = () => {
        onHandlePage("food")
        localStorage.setItem("current_food", JSON.stringify(product));
    }
    return (
    <div css={css`${cardFood}`} onClick={handlePage}>
        <img css={css`${imageFood}`} src={product.picture_url}/>
        <div>
            <label css={css`${title}`}>{product.name}</label>
        </div>
        <div>
            <label css={css`${subTitle}`}>$ {product.price}</label>
        </div>
    </div>)
}
export default CardProduct;