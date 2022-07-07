/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { returnButton } from "../styles/button"

const PreviousPage = ()=> {
    return (
        <div css={css`${returnButton}`}>
                <img  src={process.env.PUBLIC_URL + "/return.png"}/>
            </div>
    )
}
export default PreviousPage;