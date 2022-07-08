/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react"
import { listInline, listMenu } from "../styles/pages";
import { footer } from "../styles/utils";
import HomePage from "./home-page";
import { ProfilePage } from "./profile-page";
import RecordPage from "./record-page";
import FoodPage from "./food-page";
import CheckoutPage from "./checkout-page";
import HeaderPage from "../components/hearder-page";
import DeliveryPage from "./delivery-page";

const AuthenticatedPage = () => {
    const [currentPage, setCurrentPage] = useState("profile");
    const [totalCheckout, setTotalCheckout] = useState(0);
    let date = new Date();
    const handleFood = () => {
        setCurrentPage("food")
    }
    const handleCheckout = () => {
        setCurrentPage("checkout")  
    }
    const handleRecord = () => {
        setCurrentPage("record")  
    }
    const handleDelivery = (total) => {
        setCurrentPage("delivery")
        setTotalCheckout(total)
    }
    const handlePreviousPage = (value) => {
        setCurrentPage(value)
    }
    return (
        <>
        <HeaderPage onCurrentPage = {currentPage} onHandlePage = {handleCheckout} onHandlePreviousPage = {handlePreviousPage}/>
        <div>
            {currentPage === "profile"? <ProfilePage />:
             (currentPage === "home"? <HomePage onHandlePage = {handleFood}/>:
             (currentPage === "food"? <FoodPage onHandleCheckout = {handleCheckout}/>:
             (currentPage === "checkout"? <CheckoutPage onHandleDelivery = {handleDelivery} />:
             (currentPage === "delivery"? <DeliveryPage total={totalCheckout} onHandleRecord = {handleRecord}/>:<RecordPage onDate = {date}/>))) )}
        </div>
        <div css={css`${footer}`}>
            <ul css={css`${listMenu}`}>
                <li onClick={()=>setCurrentPage("home")}><img src={process.env.PUBLIC_URL + "home.png"}/></li>
                <li onClick={()=>setCurrentPage("profile")}><img src={process.env.PUBLIC_URL + "profile.png"}/></li>
                <li onClick={()=>setCurrentPage("record")}><img src={process.env.PUBLIC_URL + "record.png"}/></li>
            </ul>
        </div>
        </>
    )
}
export default AuthenticatedPage;