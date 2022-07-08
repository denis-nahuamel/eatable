/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { cardCheck, cardFood, imageCheck, imageFood, minusPlusButton, numberCheck } from "../styles/pages";
import { subTitle, title, titleCheck } from "../styles/typography";
import { containerColumn, contRowCenter, contRowCenterGap } from "../styles/utils";
const CardCheckout = ({element, onHandlePage, onTotal}) => {
    localStorage.setItem("current_food", JSON.stringify(element));
    const [subPrice, setSubPrice] = useState(element.price)
    const handleMinus =() => {
        setSubPrice(subPrice-element.price)
        onTotal(subPrice)
    }
    const handlePlus =() => {
        setSubPrice(subPrice+element.price)
        onTotal(subPrice)
    }

    return (
    <div css={css`${cardCheck}`} onClick={()=> onHandlePage("food")}>
        <div css={css`${contRowCenterGap}`}>
            <img css={css`${imageCheck}`} src={element.picture_url}/>
            <div css={css`${containerColumn}`}>
                <label css={css`${titleCheck}`}>{element.name}</label>
                <label css={css`${subTitle}`}>$ {element.price}</label>
            </div>
        </div>
        
            <div css={css`${minusPlusButton}`}>
                <div onClick={handleMinus}>-</div>
                <div css={css`${numberCheck}`}>{subPrice}</div>
                <div onClick={handlePlus}>+</div>
            </div>
        
    </div>)
}
export default CardCheckout;