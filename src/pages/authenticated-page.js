import { useState } from "react"
import HomePage from "./home-page";
import { ProfilePage } from "./profile-page";
import RecordPage from "./record-page";

const AuthenticatedPage = () => {
   
    const [currentPage, setCurrentPage] = useState("profile");
    const handleHome = () => {
        setCurrentPage("home")
    }
    const handleProfile = () => {
        setCurrentPage("profile")
    }
    const handleRecord = () => {
        setCurrentPage("record")
    }
    return (
        <>
        <div>
            <ul>
                <li onClick={handleHome}><img src={process.env.PUBLIC_URL + "home.png"}/></li>
                <li onClick={handleProfile}><img src={process.env.PUBLIC_URL + "profile.png"}/></li>
                <li onClick={handleRecord}><img src={process.env.PUBLIC_URL + "record.png"}/></li>
            </ul>
        </div>
        <div>
            {currentPage === "profile"? <ProfilePage />: (currentPage === "home"? <HomePage/>: <RecordPage/>)}
        </div>
        </>
    )
}
export default AuthenticatedPage;