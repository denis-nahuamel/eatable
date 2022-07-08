/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { cardCheck, numberCheck } from "../styles/checkout-style";
import {  cardFood, imageCheck, imageFood, minusPlusButton } from "../styles/pages";
import { subTitle, title, titleCheck } from "../styles/typography";
import { containerColumn, contRowCenter, contRowCenterGap } from "../styles/utils";
const CardCheckout = ({element, onHandlePage, onTotal}) => {
    localStorage.setItem("current_food", JSON.stringify(element));
    const handleMinus =() => {
        if (element.quantity -1 === 0) return;
        element.quantity -=1; 
        element.total = element.quantity*element.price;
        onTotal()
    }
    const handlePlus =() => {
        element.quantity +=1; 
        element.total = element.quantity*element.price;
        onTotal()
    }

    return (
    <div css={css`${cardCheck}`} >
    {/* <div css={css`${cardCheck}`} onClick={()=> onHandlePage("food")}> */}
        <div css={css`${contRowCenterGap}`}>
            <img css={css`${imageCheck}`} src={element.picture_url}/>
            <div css={css`${containerColumn}`}>
                <label css={css`${titleCheck}`}>{element.name}</label>
                <label css={css`${subTitle}`}>$ {element.price}</label>
            </div>
        </div>
        
            <div css={css`${minusPlusButton}`}>
                <div onClick={handleMinus}>-</div>
                <div css={css`${numberCheck}`}>{element.quantity}</div>
                <div onClick={handlePlus}>+</div>
            </div>
        
    </div>)
}
export default CardCheckout;