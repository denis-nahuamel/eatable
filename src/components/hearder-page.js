/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { returnButton } from "../styles/button";
import InputSearch from "./input-search";
import PreviousPage from "./previous-page";

const HeaderPage = ({onCurrentPage, onHandlePage, onHandlePreviousPage, onHandleSearch}) => {
    return (
        <>
            {onCurrentPage==="home"? 
            <InputSearch onHandlePage = {onHandlePage} onHandleSearch={onHandleSearch} />:
            <PreviousPage onHandlePreviousPage={onHandlePreviousPage}/>}  
        </>
    )
}
export default HeaderPage;