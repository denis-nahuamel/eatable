/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { cardFood, imageFood } from "../styles/pages";
import { subTitle, title } from "../styles/typography";
const CardProduct = ({product}) => {

    return (
    <div css={css`${cardFood}`}>
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