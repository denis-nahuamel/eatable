/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { listInline, listInlineEl } from "../styles/pages";
import { headText } from "../styles/typography";
const ProductType = ({onHandleFoodType}) => {
    const arrayTypes = [
        {
            name: "All",
            value: "all"
        },
        {
            name: "Italian",
            value: "italian"
        },
        {
            name: "Mexican",
            value: "mexican"
        },
        {
            name: "Snacks",
            value: "snacks"
        },
        {
            name: "Sauce",
            value: "sauce"
        },
        {
            name: "Soups",
            value: "soups"
        },

    ]
    const handleFood = (food) => {
        onHandleFoodType(food)
    }
    return (
        <div>
            <ul css={css`${listInline}`}>
                {
                    arrayTypes.map((element, index)=>(
                    <li key={index} 
                        css={css`${listInlineEl}; ${headText}`} 
                        onClick={()=> handleFood(element.value)}>
                        {element.name}</li> ))
                }   
            </ul>
        </div>
    )
}
export default ProductType;