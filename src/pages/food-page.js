/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useAuth } from "../context/auth-context";
import { buttonLogin, containerButton, returnButton } from "../styles/button";
import { cardFood, cardFoodDetail, imageFood, imageFoodDetail } from "../styles/pages";
import { description, subTitle, title } from "../styles/typography";
import {  containerColumn, contColumnCenter } from "../styles/utils";
const FoodPage = () => {
    const {addCheckoutList, handlePreviousPage, handleTitle} = useAuth();
    const food = JSON.parse(localStorage.getItem("current_food"));
    const image = `
        margin-bottom: 70px;
    `
    useEffect(()=>{
        handlePreviousPage("home")
        handleTitle("")
    },[])
    const handleCheckoutPage =(event)=> {
        event.preventDefault();
        addCheckoutList(food)
    }
    return (
        <div css={css`${contColumnCenter}`}>
            <div css={css`${image}`}>
                <img css={css`${imageFoodDetail}`} src={food.picture_url}/>
            </div>
            <div css={css`${contColumnCenter}`}>
                <label css={css`${title}`}>{food.name}</label>
                <label css={css`${subTitle}`}>$ {food.price}</label>
            </div>
            <div css={css`${containerColumn}`}>
                <label css={css`${description}`}>Description</label>
                <label > {food.description}</label>
            </div>
            <div css={css`${containerButton}`}>
                <button css={css`${buttonLogin}`} onClick={handleCheckoutPage}>Add to Cart</button>
            </div>
        </div>
    )
}
export default FoodPage;