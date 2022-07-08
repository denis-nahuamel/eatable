/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import CardCheckout from "../components/card-checkout";
import { useAuth } from "../context/auth-context";
import { buttonLogin, containerButton } from "../styles/button";
import { containerCheck } from "../styles/pages";
import { containerColumn, containerGap, contColumGap } from "../styles/utils";

const CheckoutPage = ()=> {
    const {checkoutList} = useAuth();
    const [total, setTotal] = useState(0)
    console.log("chd", checkoutList)
    const handleTotal = (value) => {
        setTotal(total+ value)
    }
    return(
        <>
        <div css={css`${containerCheck}`}>
            {checkoutList.map((element, index)=>(
            <CardCheckout key={index} element= {element} onTotal = {handleTotal}/>)
            )}
        </div>
        <div>
            <label>Total: {total}</label>
        </div>
        <div css={css`${containerButton}`}>
                <button css={css`${buttonLogin}`} >Checkout</button>
            </div>
        </>
    )
}
export default CheckoutPage;