/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import CardCheckout from "../components/card-checkout";
import { useAuth } from "../context/auth-context";
import { buttonLogin, containerButton } from "../styles/button";
import { containerCheck, contTotalCheck } from "../styles/checkout-style";
import { description, sans28 } from "../styles/typography";

const CheckoutPage = ({onHandleDelivery})=> {
    const {checkoutList} = useAuth();
    const [total, setTotal] = useState(0)
    console.log("chd", checkoutList)
    const handleTotal = () => {
        setTotal(checkoutList.reduce((acc,curr)=> {return acc+curr.total},0))
    }
    useEffect(() => {
      setTotal(checkoutList.reduce((acc,curr)=> {return acc+curr.total},0))
    }, [])
    const handleTotalDelivery =  (event) => {
        event.preventDefault();
        onHandleDelivery(total)
    }
    return(
        <>
        <div css={css`${containerCheck}`}>
            {checkoutList.map((element, index)=>(
            <CardCheckout key={index} element= {element} onTotal = {handleTotal}/>)
            )}
        </div>
        <div css={css`${contTotalCheck}`}>
            <label css={css`${description}`}>Total: </label>
            <label css={css`${sans28}`}>$ {total}</label>
        </div>
        <div css={css`${containerButton}`}>
                <button css={css`${buttonLogin}`} onClick={handleTotalDelivery} >Checkout</button>
            </div>
        </>
    )
}
export default CheckoutPage;