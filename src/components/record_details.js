/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { cardFood } from "../styles/pages";
import { containerRow, contRowBetweenW100, line } from "../styles/utils";

const RecordDetails = ({order})=> {
    return (
        <div css={css`${contRowBetweenW100}`}>
            <div css={css`${containerRow}`}>
                <div>{order.product_id}</div>
                <div>{order.product_name}</div>
            </div>
            <div>
                <div>{order.subtotal}</div>
            </div>
        </div>)
}
export default RecordDetails;
