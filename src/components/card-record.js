/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { title } from "../styles/typography";
import { useAuth } from "../context/auth-context";
import RecordDetails from "./record_details";
import { recordCard } from "../styles/record";
import { contRowBetweenW100, contStartW100, line } from "../styles/utils";
const CardRecord = ({order}) => {
   const {user} = useAuth();
   let date = new Date(order.created_at.split('T')[0]).toDateString();
    console.log("date", date)
   return (
            <div css={css`${recordCard}`} >
                <div>
                    <label css={css`${title}`}>{date.toString()}</label>
                </div>
                <div css={css`${contRowBetweenW100}`}>
                    <div>{order.items_count} items</div>
                    <div>$ {order.total}</div>
                </div >
                <div css={css`${contStartW100}`}>Order</div>
                    {order.order_details.map((orderDetail, index)=>(<RecordDetails key={index} order={orderDetail}/>))}
                <div css={css`${line}`}></div>
                <div css={css`${contStartW100}`}>Delivery</div>
                <div css={css`${contStartW100}`}>{user.address}</div>
            </div>)
    
}
export default CardRecord;