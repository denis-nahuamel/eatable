/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useAuth } from "../context/auth-context";
import { returnButton } from "../styles/button"
import { sans22W600, titleCheck } from "../styles/typography";

const PreviousPage = ({onHandlePreviousPage})=> {
    const {title, previousPage} = useAuth();
    const handlePrevious = (event) => {
        console.log("hrevp", previousPage)
            event.preventDefault();
            onHandlePreviousPage(previousPage)
    }
    return (
        <div css={css`${returnButton}`}>
            <div>
                <img  onClick={handlePrevious} src={process.env.PUBLIC_URL + "/return.png"}/>
            </div>
            <div>
                <label css={css`${sans22W600}`}>{title}</label>
            </div>
            <div></div>
        </div>
    )
}
export default PreviousPage;